import React, {useState} from 'react'
import styles from './Question.module.css'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaArrowRight  } from "react-icons/fa";

export default function Question() {
  return (
    <div className={styles.QuestionContainer}>
        <div className={styles.Question}> 
        <div className={styles.HeaderText}>Câu hỏi thường gặp</div>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Câu hỏi #1</Accordion.Header>
        <Accordion.Body>
          Nội dung câu hỏi 1 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Câu hỏi #2</Accordion.Header>
        <Accordion.Body>
            Nội dung câu hỏi 2
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Câu hỏi #3</Accordion.Header>
        <Accordion.Body>
            Nội dung câu hỏi 3
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
    </div>
    <div className={styles.Request}>
    <div className={styles.HeaderText}>Gửi yêu cầu</div>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control type="text" placeholder="Chủ đề"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" row={4} placeholder="Nội dung"/>
      </Form.Group>
    </Form>
    <Button className={styles.SubmitButton}>
        Gửi yêu cầu
      </Button>
    </div>
    </div>
  )
}
