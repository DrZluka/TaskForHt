import React, {Component} from 'react';
import "./ValidationForm.scss"

class ValidationForm extends Component {


    conformMassage(){
        console.log("submit success")
    }


    render() {
        return (
            <>
                <div className="form-group">
                    <label>Имя</label>
                    <input type="text" name="firstNameInput" required/>
                </div>
                <div className="form-group">
                    <label>Фамилия</label>
                    <input type="text" name="lastNameInput" required/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="emailInput" required/>
                </div>
                <div className="form-group">
                    <label>Пароль</label>
                    <input type="password" name="passwordInput" required minLength="6" maxLength="16"/>
                </div>
                <div className="form-group">
                    <label>Подтверждение пароля</label>
                    <input type="password" name="passwordConfirmInput" required minLength="6" maxLength="16"/>
                </div>
                <div className="form-group">
                    <input type="checkbox" name="acceptedInput" required/>
                        <label className="inline">Согласен с условиями использования</label>
                </div>
                <div className="form-group">
                    <input onClick={()=>this.conformMassage()} type="submit" value="Зарегистрироваться"/>
                </div>
            </>
        );
    }
}

export default ValidationForm;