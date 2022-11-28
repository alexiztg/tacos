function Pedido() {
    return (
      <div className="pedido" id="pedido">
        <form>
          <div>
            <input placeholder="Tacos al pastor" />
            <input placeholder="Cantidad" type="number" />
          </div>
          <div>
            <input placeholder="Tacos suadero" />
            <input placeholder="Cantidad" type="number" />
          </div>
          <button>Pedir</button>
        </form>
      </div>
    );
  }
  
  export default Pedido;