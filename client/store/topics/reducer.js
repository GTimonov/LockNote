import Immutable from 'seamless-immutable';

const initialState = Immutable({
    topicsByUrl: {},
    selectedTopicUrls: []
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        default:
            return state;
    }
}