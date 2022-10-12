import { render, screen } from "@testing-library/react";

import { addChatWithFirebase } from "../chats/constants";
import { chatsReducer } from "../chats/reducer"

    const state = {
        chatList: []
    };

describe('Chats reducer', () => {

  test('add chat', () => {
    const result = chatsReducer(state, addChatWithFirebase('test', 0));
    console.log(result);

    expect(result.find((chat) => chat[0].title === 'test')).toBeTruthy();
  })
})