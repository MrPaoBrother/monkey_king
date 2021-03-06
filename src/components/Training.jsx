import React from 'react'

import Modal from 'react-modal';
import {connect} from "react-redux";
import images from "../theme/images";


const modalStyle = {
    content: {
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'url(' + images.modal_bg + ')',
        width: 386,
        height: 554,
        paddingTop: 80
    }
};

class Training extends React.Component {

    handleTraining(value) {
        if (this.props.Training) {
            this.props.Training(value)
        }
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.fightIsOpen}
                    onRequestClose={this.props.closeFightModal}
                    style={modalStyle}
                    contentLabel=""
                >

                    <div className='training_box'>
                        <input value={this.props.fightInput} className={'training_input'} onChange={this.props.handleChangeFightInput}/>
                        <span>修炼战力</span>

                        <div className='YesBox' style={{background: 'url(' + images.fight_bg + ')'}}>
                            <span className='Yes'
                                  onClick={this.handleTraining.bind(this, this.props.fightInput)}>确定</span>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        openFightModal() {
            const action = {
                type: 'open_fight_modal'
            }
            dispatch(action);
        },
        closeFightModal() {
            const action = {
                type: 'close_fight_modal'
            }
            dispatch(action);
        },
        handleChangeFightInput(e) {
            const action = {
                type: 'change_fight_input',
                value: e.target.value
            }
            dispatch(action);
        },

        Training(value) {
            const action = {
                type: 'training',
                value: value
            }
            dispatch(action);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        fightIsOpen: state.fightIsOpen,
        fightInput: state.fightInput
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Training);
