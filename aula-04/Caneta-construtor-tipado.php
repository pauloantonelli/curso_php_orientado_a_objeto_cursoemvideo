<?php

class CanetaConstruct{
    private $modelo;
    private $ponta;
    private $tampada;
    private $cor;
    
    public function __construct($m, $c, $p){//Se por o mesmo nome da classe(nesse caso Caneta) ele ainda continua como construtor
        $this->setModelo($m);
        $this->setPonta($p);
        $this->setCor($c);
        $this->tampar();
    }

    public function getModelo(){
        return $this->modelo;
    }
    public function setModelo($m){
        $this->modelo = $m;
    }
    public function getPonta(){
        return $this->ponta;
    }
    public function setPonta($p){
        $this->ponta = $p;
    }
    public function setCor($c){
        $this->cor = $c;
    }
    public function tampar(){
        $this->tampada = true;
    }
}

?>