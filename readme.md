# frontend_project

## Project setup
```
cd frontend_project
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

#### Observações:
```
O projeto tem alguns problemas estruturais:
1- O recebimento da lista acontece no carregamento ou na troca de pagina logo o banco se for auterado em meio enquanto a lista esta aberta entrega uma lista desatulizada pro usuario ate o mesmo recarregar o componente(Seja atualizando a pagina ou trocando pela barra de navegação.)
2- A atualização de usuario não conta com o banco e pelo fato do put receber todos os dados de usuario caso duas pessoas tentem atualizar dados de um mesmo usuario ao mesmo tempo uma das atualizações pode ser perdida.
3- A API de usuario e o encapsulamento do Vuex se encontra em /handlers/
```