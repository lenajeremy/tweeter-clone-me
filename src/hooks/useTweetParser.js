import React from 'react';
import Interweave from 'interweave';
import {UrlMatcher, HashtagMatcher}  from 'interweave-autolink';


const useTweetParser = function(){
	return tweet => <Interweave content = {tweet} matchers = {[new UrlMatcher('url'), new HashtagMatcher('hashtag')]}/>
}

export default useTweetParser;