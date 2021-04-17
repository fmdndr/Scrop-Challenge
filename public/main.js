// @ts-check

import { APIWrapper, API_EVENT_TYPE } from './api.js';
import {
	addMessage,
	animateGift,
	isPossiblyAnimatingGift,
	isAnimatingGiftUI
} from './dom_updates.js';

const api = new APIWrapper();

api.setEventHandler((events) => {
	events.filter((item) => {
		if (item.type === API_EVENT_TYPE.ANIMATED_GIFT) {
			setTimeout(() => {
				if (isAnimatingGiftUI) {
					if (isPossiblyAnimatingGift) {
						animateGift(item);
					}
				}
			}, 500);
		} else if (item.type === API_EVENT_TYPE.GIFT) {
			setTimeout(() => {
				addMessage(item);
			}, 500);
			addMessage(item);
		}
	});
});
