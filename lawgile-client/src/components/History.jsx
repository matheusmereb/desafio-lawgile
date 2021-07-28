import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { BsPencilSquare } from "react-icons/bs";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

export default function Home() {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    async function onLoad() {

      try {
        const pedidos = await loadPedidos();
        setPedidos(pedidos);
      } catch (e) {
        onError(e);
      }
  
      setIsLoading(false);
    }
  
    onLoad();
  }, []);
  
  function loadPedidos() {
    return API.get("pedidos", "/pedidos");
  }
  

  function renderOrderList(pedidos) {
    return (
      <>
        <LinkContainer to="/pedidos/new">
          <ListGroup.Item action className="py-3 text-nowrap text-truncate">
            <BsPencilSquare size={17} />
            <span className="ml-2 font-weight-bold">Faça um novo pedido</span>
          </ListGroup.Item>
        </LinkContainer>
        {pedidos.map(({ pedidoId, content, createdAt }) => (
          <LinkContainer key={pedidoId} to={`/pedidos/${pedidoId}`}>
            <ListGroup.Item action>
              <span className="font-weight-bold">
                {content.trim().split("\n")[0]}
              </span>
              <br />
              <span className="text-muted">
                Criado em: {new Date(createdAt).toLocaleString()}
              </span>
            </ListGroup.Item>
          </LinkContainer>
        ))}
      </>
    );
  }
  

  function renderPedidos() {
    return (
      <div className="pedidos">
        <h2 className="pb-3 mt-4 mb-3 border-bottom">Pedidos anteriores</h2>
        <ListGroup>{renderOrderList(pedidos)}</ListGroup>
      </div>
    );
  }

  return (
    <div className="Home">
      {renderPedidos()}
    </div>
  );
}