import { User } from '../model/user.entity';

class UserController{
    public async confirmEmail(pin: string): Promise<any>{
        let result = {
            statusCode: 200,
            msg: ''
        };
        try{
            const user = await User.findOne({
                where: {
                    pin
                }
            });
    
            if(user){
                await User.update({ active: 1, pin: "" }, {
                    where: {
                        pin
                    }
                });
                result['msg'] = "E-mail verificado ;D";
            }else{
                result['msg'] = "Token inválido.";
                result['statusCode'] = 400;
            }
        }catch(err){
            result['msg'] = "Deu ruim, tente validar o email novamente.";
            result['statusCode'] = 400;
        }
        return result;
    }

    public sendEmail(email: string): void{
        
    }
}

export default UserController;