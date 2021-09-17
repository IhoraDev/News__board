import { nanoid } from '@reduxjs/toolkit';
import * as ActionTypes from './ActionTypes';

const initialState = {
  announcements: [
    {
      ID: nanoid(),
      title: ' What is Lorem Ipsum? ',
      description: ' Lorem Ipsum sdgd fgvdythjgvcw e ',
      date: new Date().toDateString(),
      edited: false,
    },
    {
      ID: nanoid(),
      title: ' What is Lorem Ipsum? ',
      description:
        ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an " +
        'unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
        'It has survived not only five centuries, but also the leap into electronic typesetting, ' +
        'remaining essentially unchanged. It was popularised in the 1960s with the release of ' +
        'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing ' +
        'software like Aldus PageMaker including versions of Lorem Ipsum. ',
      date: new Date().toDateString(),
      edited: false,
    },
    {
      ID: nanoid(),
      title: ' Why do we use it? ',
      description:
        ' It is a long established fact that a reader will be distracted by the readable content ' +
        'of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less ' +
        "normal distribution of letters, as opposed to using 'Content here, content here', making it look like " +
        'readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their ' +
        "default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. " +
        'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected ' +
        'humour and the like). ',
      date: new Date().toDateString(),
      edited: false,
    },
    {
      ID: nanoid(),
      title: ' What is Lorem Ipsum? ',
      description:
        ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an " +
        'unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
        'It has survived not only five centuries, but also the leap into electronic typesetting, ' +
        'remaining essentially unchanged. It was popularised in the 1960s with the release of ' +
        'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing ' +
        'software like Aldus PageMaker including versions of Lorem Ipsum. ',
      date: new Date().toDateString(),
      edited: false,
    },
    {
      ID: nanoid(),
      title: ' Why Learn ReactJS? ',
      description:
        ' ReactJS offers graceful solutions to some of front-end programming’s ' +
        'most persistent issues, allowing you to build dynamic and interactive web apps with ease. ' +
        'It’s fast, scalable, flexible, powerful, and has a robust developer community that’s rapidly ' +
        'growing. There’s never been a better time to learn React. ',
      date: new Date().toDateString(),
      edited: false,
    },
    {
      ID: nanoid(),
      title: ' Take-Away Skills: ',
      description:
        ' You’ll develop a strong understanding of React’s most essential concepts: JSX, ' +
        'class and function components, props, state, lifecycle methods, and hooks. You’ll be able ' +
        'to combine these ideas in React’s modular programming style. ',
      date: new Date().toDateString(),
      edited: false,
    },
    {
      ID: nanoid(),
      title: ' Why do we use it? ',
      description: ' It is sjfgukesfv a long. ',
      date: new Date().toDateString(),
      edited: false,
    },
    {
      ID: nanoid(),
      title: ' What is Lorem Ipsum? ',
      description: ' ssdfsdf8674sfsdf 88554' + ' Lorem Ipsum  ',
      date: new Date().toDateString(),
      edited: false,
    },
    {
      ID: nanoid(),
      title: ' Why Learn ReactJS? ',
      description: ' React846834JS offers ',
      date: new Date().toDateString(),
      edited: false,
    },
    {
      ID: nanoid(),
      title: ' What is Lorem Ipsum ',
      description: ' Lorem7777 Ipsum ',
      date: new Date().toDateString(),
      edited: false,
    },
    {
      ID: nanoid(),
      title: ' What is Lorem Ipsum ',
      description: ' Lo777rem Ipsum ',
      date: new Date().toDateString(),
      edited: false,
    },
  ],
};

export const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_NEWS:
      return Object.assign({}, state, {
        announcements: [
          ...state.announcements,
          {
            ID: action.payload.ID,
            title: action.payload.title,
            description: action.payload.description,
            date: action.payload.date,
            edited: false,
          },
        ],
      });

    case ActionTypes.EDIT_NEWS:
      return Object.assign({}, state, {
        announcements: state.announcements.map((ann) => {
          if (ann.ID === action.payload.ID) {
            return Object.assign({}, ann, {
              title: action.payload.title,
              description: action.payload.description,
              edited: true,
            });
          }
          return ann;
        }),
      });

    case ActionTypes.DELETE_NEWS:
      return {
        announcements: state.announcements.filter(
          (ann) => ann.ID !== action.payload
        ),
      };

    default:
      return state;
  }
};
