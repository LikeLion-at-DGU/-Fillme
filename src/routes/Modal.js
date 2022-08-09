import React, { Component } from 'react';
import Modal from '../components/Modal_child';

export class ChatRooms extends App {
        this.state = {
        modalOpen: false,
    }

    openModal = () => {
        this.setState({ modalOpen: true })
    };
    closeModal = () => {
        this.setState({ modalOpen: false })
    };
    render() {
        return (
            <React.Fragment>
                <button onClick={ this.openModal }> 모달팝업</button>
                <Modal open={ this.state.modalOpen } close={ this.closeModal } title="Create a chat room">
                    // Modal.js <main> { this.props.children } </main>에 내용이 입력된다.
                    리액트 클래스형 모달 팝업창입니다.
                    쉽게 만들 수 있어요.
                    같이 만들어봐요!
                </Modal>
            </React.Fragment>
        );
    }
}
export default App
