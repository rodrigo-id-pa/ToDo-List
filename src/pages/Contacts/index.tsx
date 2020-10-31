import React, { useState, InputHTMLAttributes, FormEvent } from 'react';
import { useEffect } from 'react';

import { FaUser, FaEnvelope, FaPhone, FaTrashAlt } from 'react-icons/fa';

import uuid from 'uuid';

import { Container, List, Button } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  nome: string;
  telefone: string;
  email: string;
}

const Contacts = () => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [eml, setEml] = useState('');
  const [list, setList] = useState<InputProps[]>(() => {
    const storageList = localStorage.getItem('@Dashboard:list');
    if (storageList) {
      return JSON.parse(storageList);
    }
    return [];
  });

  function handleOff(e: FormEvent) {
    e.preventDefault();
    const val = {
      id: uuid.v4(),
      nome: name,
      telefone: tel,
      email: eml,
    };

    setList([...list, val]);
  }

  function handleDelete(id: string) {
    const position = list.findIndex((value) => {
      return value.id === id;
    });
    list.splice(position, 1);
    setList([...list]);
  }

  useEffect(() => {
    localStorage.setItem('@Dashboard:list', JSON.stringify(list));
  }, [list]);

  return (
    <>
      <Container>
        <form onSubmit={handleOff}>
          <h1>Contatos</h1>
          <fieldset>
            <FaUser className="user" color="#555" size={20} />
            <input
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <FaPhone className="phone" color="#555" size={20} />
            <input
              type="text"
              placeholder="Telefone"
              value={tel}
              onChange={(e) => {
                setTel(e.target.value);
              }}
            />
            <FaEnvelope className="mail" color="#555" size={20} />
            <input
              type="text"
              placeholder="Email"
              value={eml}
              onChange={(e) => {
                setEml(e.target.value);
              }}
            />
            <button type="submit">Adicionar</button>
          </fieldset>
        </form>
        <List>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {list.map((user) => (
                <tr key={user.id}>
                  <td>{user.nome}</td>
                  <td>{user.telefone}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button onClick={(e) => handleDelete(user.id)}>
                      <FaTrashAlt size={20} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </List>
      </Container>
    </>
  );
};

export default Contacts;
