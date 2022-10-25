import { Link } from "react-router-dom";
import '../components/carrinho.css';

export function Carrinho() {
    return (
        <>
            <main class="container">
      <h1>Carrinho</h1>
      <div class="top">
        <div class="top-produto">
          <img
            class="imgMaca"
            src="image/imgCarrinho/maca.png"
            alt="maçã"
          />
          <p class="nomeProduto">MAÇÃ VERMELHA</p>
        </div>

        <div class="top-quant-valor">
          <button class="button1">500 +</button>
          <p class="valorProduto">R$12,35</p>
        </div>
      </div>

      <div class="risco"><hr /></div>

      <div class="mid">
        <div class="mid-frete">
          <p>Frete</p>
          <p>Total com frete</p>
        </div>

        <div class="mid-valor">
          <p>R$ 5,00</p>
          <p>R$17,35</p>
        </div>
      </div>

      <div class="risco"><hr /></div>

      <div class="bottom">
        <button class="button2">Finalizar Compra</button>
      </div>
    </main>
        </>
    )
}