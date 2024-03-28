import ServicoExercicio from "../services/service.js";
const servico = new ServicoExercicio()
const resultado = 0;
export default class ControllerExercicio {

  Somar(req, res) {
   
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2; 
  
     
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Os valores fornecidos não são números válidos.");
      }
  
      const result = servico.Somar(num1, num2);
  
      res.status(200).json({ resultado: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
    Subtrair(req, res){
      try {
        const num1 = req.body.num1;
        const num2 = req.body.num2;

        if (isNaN(num1) || isNaN(num2)) {
          throw new Error("Os valores fornecidos não são números válidos.");
        }

        const result = servico.Subtrair(num1, num2)
        
        res.status(200).json({resultado: result});
      } catch (error) {
        res.status(500).json({ message: "Erro ao Subtrair"});
      }
    }
    Dividir(req, res) {
      try {
        const num1 = req.body.num1;
        const num2 = req.body.num2; 
    
        if (isNaN(num1) || isNaN(num2) || num2 === 0) {
          throw new Error("Os valores fornecidos não são números válidos ou num2 é igual a zero.");
        }
    
        const result = servico.Dividir(num1, num2);
    
        res.status(200).json({ resultado: result });
      } catch (error) {
        res.status(500).json({ message: "não é possivel realizar um divisão por zero. Infinito." });
      }
    }
    
    Multiplicar(req, res){
      try {
        const num1 = req.body.num1
        const num2 = req.body.num2

        const result = servico.Multiplicar(num1, num2)
        
        res.status(200).json({ resultado: result });
      } catch (error) {
        res.status(500).json({ message: "Erro ao Multiplicar"});
      }
    }

}