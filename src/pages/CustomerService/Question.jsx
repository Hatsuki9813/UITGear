import React, { useState, useEffect } from 'react'
import styles from './Question.module.css'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';
import { useQuestionStore } from '../../store/useQuestion';
export default function Question() {
  const { questions, getAllQuestions, loading } = useQuestionStore();

  useEffect(() => {
    getAllQuestions();
  }, []);

  return (
    <div className={styles.QuestionContainer}>
      <div className={styles.Question}>
        <div className={styles.HeaderText}>Câu hỏi thường gặp</div>
        <Accordion defaultActiveKey="0">
            {questions.map((q, index) => (
              <Accordion.Item eventKey={index.toString()} key={q._id || index}>
                <Accordion.Header>{q.question}</Accordion.Header>
                <Accordion.Body>{q.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
      </div>
      <div className={styles.Request}>
        <div className={styles.HeaderText}>Gửi yêu cầu</div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control type="text" placeholder="Chủ đề" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" row={4} placeholder="Nội dung" />
          </Form.Group>
        </Form>
        <Button className={styles.SubmitButton}>
          Gửi yêu cầu
        </Button>
      </div>
    </div>
  )
}
