<?php
    require_once 'interface.php';
    class Lutadores implements interLuta{
        //atributos
        private $nome;// : caractere
        private $nacionalidade;// : caractere
        private $idade;// : inteiro
        private $altura;// : real
        private $peso;// : real
        private $categoria;// caractere
        private $vitorias;// : inteiro
        private $derrotas;// : inteiro
        private $empates;// : inteiro
        //construtor
        public function __construct($no, $na, $id, $al, $pe, $vi, $de, $em){
            $this->nome = $no; $this->nacionalidade = $na; $this->idade = $id; $this->altura = $al; $this->setPeso($pe); $this->vitorias = $vi; $this->derrotas = $de; $this->empates = $em;
        }
        //metodos especiais
        public function getNome(){
            return $this->nome;
        }
        public function setNome($nome){
            $this->nome = $nome;
        }
        public function getNac(){
            return $this->nacionalidade;
        }
        public function setNac($nac){
            $this->nacionalidade = $nac;
        }
        public function getIdade(){
            return $this->idade;
        }
        public function setIdade($idade){
            $this->idade = $idade;
        }
        public function getAltura(){
            return $this->altura;
        }
        public function setAltura($altura){
            $this->altura = $altura;
        }
        public function getPeso(){
            return $this->peso;
        }
        public function setPeso($peso){
            $this->peso = $peso;
            $this->setCategoria($peso);
        }
        public function getCategoria(){
            return $this->categoria;
        }
        private function setCategoria($peso){
            if($peso < 52.2){
                $this->categoria = 'Invalido';
            }else if($peso <= 70.3){
                $this->categoria = 'Leve';
            }else if($peso <= 83.9){
                $this->categoria = 'Médio';
            }else if($peso <= 120.2){
                $this->categoria = 'Pesado';
            }else{
                $this->categoria = 'Inválido';
            }
        }
        public function getVitorias(){
            return $this->vitorias;
        }
        public function setVitorias($vit){
            $this->vitorias = $vit;
        }
        public function getDerrotas(){
            return $this->derrotas;
        }
        public function setDerrotas($derr){
            $this->derrotas = $derr;
        }
        public function getEmpates(){
            return $this->empates;
        }
        public function setEmpates($emp){
            $this->empates = $emp;
        }
        //metodos
        public function apresentar(){
            echo '<br/>';
            echo "Lutador: ". $this->getNome();
            echo '<br/>Origem: '. $this->getNac();
            echo '<br/>Idade: '.$this->getIdade();
            echo '<br/>Altura: '.$this->getAltura(). 'm';
            echo '<br/>Pesando '.$this->getPeso().'KG';
            echo '<br/>Ganhou: '. $this->getVitorias();
            echo '<br/>Perdeu: '.$this->getDerrotas();
            echo '<br/>Empatou: '.$this->getEmpates();
        }
        public function status(){
            echo $this->getNome();
            echo ' é um peso '.$this->getCategoria().' ';
            echo 'com '.$this->getVitorias().' vitórias ';
            echo 'e '.$this->getDerrotas().' derrótas ';
            echo 'e '.$this->getEmpates().' empates.';
        }
        public function ganharLuta(){
            $this->setVitorias($this->getVitorias() + 1);
        }
        public function perderLuta(){
            $this->setDerrotas($this->getVitorias() + 1);
        }
        public function empatarLuta(){
            $this->setEmpates($this->getEmpates() + 1);
        }
    }
?>