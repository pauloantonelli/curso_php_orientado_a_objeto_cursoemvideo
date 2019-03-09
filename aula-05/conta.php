<?php
    class conta{
        protected $tipo;//tipo string
        public $numConta;//tipo inteiro
        private $dono;//tipo string
        private $saldo;//tipo float
        private $status;//tipo booleano
        public function __construct($nome, $nConta ){
            $this->status = false;
            $this->saldo = 0;
            $this->dono = $nome;
            $this->numConta = $nConta;
            echo "<br>".$this->dono." sua conta foi criada com sucesso com o numero ".$this->numConta;
        }
        //tipo da conta
        public function getTipo(){
            return $this->tipo;
        }
        public function setTipo($t){
            if($t == 'cc' || $t == 'cp'){
                $this->tipo = $t;
                echo 'Tipo de conta escolhida: ';
                if($this->getTipo() == 'cc'){
                    $this->saldo = 50;
                    echo 'Conta Corrente. <br/>';
                }elseif($this->getTipo() == 'cp'){
                    $this->saldo = 150;
                    echo 'Conta Poupança. <br/>';
                }
            }else{
                echo 'tipo de conta invalida, contas permitidas: Conta Corrente, ou Conta Poupança';
            }
        }
        //numero da conta
        public function getNumConta(){
            return $this->numConta;
        }
        public function setNumConta($num){
            $this->numConta = $num;
        }
        //dono da conta
        public function getDono(){
            return $this->dono;
        }
        public function setDono($d){
            $this->dono = $d;
        }
        //saldo em conta
        public function getSaldo(){
            return $this->saldo;
        }
        public function setSaldo($s){
            $this->saldo = $s;
        }
        //status da conta
        public function getStatus(){
            return $this->status;
        }
        public function setStatus($stat){
            $this->status = $stat;
        }


        //abrir conta
        public function abrirConta($t){
            $this->setStatus(true);
            $this->setTipo($t);
            echo 'Conta '.$this->getTipo().' criada com sucesso<br/>';
        }
        //fechar conta
        public function fecharConta(){
            if($this->getSaldo() == 0){
                $this->getStatus(false);
                echo 'Conta fechada com sucesso!';
            }elseif($this->getSaldo() > 0){
                echo 'Para fechar sua conta primeiro retire todo o dinheiro em saldo R$'.$this->getSaldo();
            }elseif($this->getSaldo() < 0){
                echo 'Para fechar sua conta primeiro quite seus debitos R$'.$this->getSaldo();
            }
        }
        //depositar
        public function depositar($s){
            if($this->getStatus() == true){
                $this->setSaldo($this->getSaldo()+$s);
            }else{
                echo 'É preciso abrir uma conta primeiro para depositar dinheiro';
            }
        }
        //sacar
        public function sacar($s){
            if($this->getStatus() == true && $this->getSaldo() >= $s){
                $this->setSaldo($this->getSaldo()-$s);
                echo 'Voce sacou: R$'.$s;
            }elseif($this->getStatus() == true && $this->getSaldo() < $s){
                echo 'Saldo insuficiente R$'.$this->getSaldo();
            }else{
                echo "impossivel sacar!";
            }
        }
        //mensalidade
        public function pagarMensal(){
            if($this->getStatus() == true && $this->getTipo() == 'cc'){
                if($this->getSaldo() >= 12){
                    $this->setSaldo($this->getSaldo()-12);
                    echo 'Mensalidade paga com sucesso, seu novo saldo é R$'.$this->getSaldo();
                }else{
                    echo 'Saldo insuficiente! R$'.$this->getSaldo().' Voce esta no cheque especial!';
                }
            }elseif($this->getStatus() == true && $this->getTipo() == 'cp'){
                if($this->getSaldo() >= 20){
                    $this->setSaldo($this->getSaldo()-20);
                echo 'Mensalidade paga com sucesso, seu novo saldo é R$'.$this->getSaldo();
                }else{
                    echo 'Saldo insuficiente! R$'.$this->getSaldo().' Voce esta no cheque especial!';
                }
            }else{
                echo "Impossivel depositar!";
            }
        }
    }
?>