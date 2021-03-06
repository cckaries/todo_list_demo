import React, { Component } from 'react';

import styles from './TaskCreator.module.css';
import Button from '../../UI/Button/Button';

export default class TaskCreator extends Component {
  state = {
    title: '',
    date: '',
    file: '',
    comment: '',
    isStarred: false,
    isCompleted: false
  };

  inputChangeHandler = e => {
    this.setState({
      ...this.state,
      title: e.target.value
    });
  };

  textareaChangeHandler = e => {
    this.setState({
      ...this.state,
      comment: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const newTask = { ...this.state };
    this.props.addTask(newTask);

    this.setState({
      title: '',
      date: '',
      file: '',
      comment: '',
      isStarred: false,
      isCompleted: false
    });
  };

  render() {
    return (
      <div className={styles.Container}>
        <form onSubmit={this.submitHandler}>
          <div className={styles.Title}>
            <div>ICON</div>
            <input
              type="text"
              placeholder="Title"
              onChange={this.inputChangeHandler}
              value={this.state.title}
            />
            <div>
              <div>STAR</div>
              <div>EDIT</div>
            </div>
          </div>

          <div className={styles.Body}>
            <div>DEADLINE DATE</div>
            <div>FILE</div>
            <div>
              <textarea
                name="comment"
                placeholder="Coment"
                onChange={this.textareaChangeHandler}
                value={this.state.comment}
              />
            </div>
          </div>

          <div className={styles.Buttons}>
            {/* <Button clicked={props.cancelTask} />
        <Button type="add" clicked={props.addTask} /> */}
            <Button type="add" />
          </div>
        </form>
      </div>
    );
  }
}
