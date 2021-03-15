import React from 'react';
import Interweave from 'interweave';
import { UrlMatcher, HashtagMatcher } from 'interweave-autolink';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const useTweetParser = function () {

	const colorPalette = useSelector(store => store.colorPalette);

	class MyUrlMatcher extends UrlMatcher {
		replaceWith(children) {
			return <a style = {{color: colorPalette.special}} href={children.startsWith('http') ? children : 'https://' + children} rel='noopener noreferrer' target='_blank'>{children}</a>
		}
	}
	
	class MyHashtagMatcher extends HashtagMatcher {
		replaceWith(children, props) {
			return <Link style = {{color: colorPalette.special}} to={`/hashtags/${children.slice(1, children.length)}`} {...props}>{children}</Link>
		}
	}

	return tweet => <Interweave content={tweet} matchers={[new MyUrlMatcher('url'), new MyHashtagMatcher('hashtag')]} />
}

export default useTweetParser;