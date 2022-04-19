
import './App.css';

function App() {
  return (
    <div className="App">
          <div id="main-container">
    <h1>Cadastre-se para acessar o sistema</h1>
    <form id="register-form" action="">
      <div className="full-box">
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" data-min-length="2" data-email-validate />
      </div>
      <div className="half-box spacing">
          <label for="name">Nome</label>
          <input type="text" name="name" id="name" placeholder="Digite seu nome" data-required data-min-length="3" data-max-length="16"/>
      </div>
      <div className="half-box">
          <label for="lastname">Sobrenome</label>
          <input type="text" name="lastname" id="lastname" placeholder="Digite seu sobrenome" data-required data-only-letters/>
      </div>
      <div className="half-box spacing">
        <label for="lastname">Senha</label>
        <input type="password" name="password" id="password" placeholder="Digite sua senha" data-password-validate data-required/>
      </div>
      <div className="half-box">
        <label for="passconfirmation">Confirmação de senha</label>
        <input type="password" name="passconfirmation" id="passwordconfirmation" placeholder="Digite novamente sua senha" data-equal="password"/>
      </div>
      <div>
        <input type="checkbox" name="agreement" id="agreement"/>
        <label for="agreement" id="agreement-label">Eu li e aceito os <a href="#home">termos de uso</a></label>
      </div>
      <div className="full-box">
        <input id="btn-submit" type="submit" value="Registrar"/>
      </div>
    </form>
  </div>
  <p className="error-validation template"></p>

    </div>
  );
}

export default App;
