import calcObjectForPatch from '../../services/api-patch';

export const REQUEST_TAGS = 'co/tag/REQUEST_TAGS';
export const REQUEST_TAGS_SUCCESS = 'co/tag/REQUEST_TAGS_SUCCESS';
export const REQUEST_TAGS_FAIL = 'co/tag/REQUEST_TAGS_FAIL';
export const INVALIDATE_TAGS = 'co/tag/INVALIDATE_TAGS';
export const CREATE_TAG = 'co/tag/CREATE_TAG';
export const CREATE_TAG_SUCCESS = 'co/tag/CREATE_TAG_SUCCESS';
export const REQUEST_TAG = 'co/tag/REQUEST_TAG';
export const UPDATE_TAG = 'co/tag/UPDATE_TAG';
export const REMOVE_TAG = 'co/tag/REMOVE_TAG';

export function requestTags() {
  return {
    type: REQUEST_TAGS,
    payload: {
      request: {
        url: '/v1/tags',
      },
    },
  };
}

export function invalidate() {
  return {
    type: INVALIDATE_TAGS,
    payload: {},
  };
}

export function createTag({ tagName }) {
  const data = { name: tagName };

  return {
    type: CREATE_TAG,
    payload: {
      request: {
        url: '/v1/tags',
        method: 'post',
        data,
      },
    },
  };
}

export function requestTag({ id }) {
  return {
    type: REQUEST_TAG,
    payload: {
      request: {
        url: `/v1/tags/${id}`,
      },
    },
  };
}


export function removeTag({ tag }) {
  return {
    type: REMOVE_TAG,
    payload: {
      request: {
        method: 'delete',
        url: `/v1/tags/${tag.tag_id}`,
      },
    },
  };
}

export function updateTag({ tag, original }) {
  const data = calcObjectForPatch(tag, original);

  return {
    type: UPDATE_TAG,
    payload: {
      request: {
        method: 'patch',
        url: `/v1/tags/${tag.tag_id}`,
        data,
      },
    },
  };
}

const initialState = {
  isFetching: false,
  didInvalidate: false,
  tags: [],
  total: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TAGS:
      return { ...state, isFetching: true };
    case REQUEST_TAGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        tags: action.payload.data.tags,
        total: action.payload.data.total,
      };
    case INVALIDATE_TAGS:
      return { ...state, didInvalidate: true };
    default:
      return state;
  }
}
