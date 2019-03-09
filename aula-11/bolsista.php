<?php
    require_once 'aluno.php';
    class Bolsista extends Aluno{
        //ATRIBUTOS
        private $bolsa;
        //METODOS ESPECIAIS
        public function getBolsa(){
            return $this->bolsa;
        }
        public function setBolsa($bolsa){
            $this->bolsa = $bolsa;
        }
        //METODOS PUBLICOS
        public function renovarBolsa(){
            echo 'Bolsa Renovada!';
        }
        public final function pagarMensalidade(){
            echo $this->nome." é bolsista, então paga com desconto!";
        }
    }
?>