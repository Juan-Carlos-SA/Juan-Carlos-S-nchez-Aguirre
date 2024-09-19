//Regla sintactica de js


class persona {
    constructor(nombre, apellido, edad, sexo, direccion, correo, tel, horario) {
        this._nombre=nombre
        this._apellido=apellido
        this._edad=edad
        this._sexo=sexo
        this._direccion=direccion
        this._correo=correo
        this._tel=tel
        this._horario=horario
    }
}

class alumno extends persona {
    constructor(nombre, carrera, semestre) {
        super(nombre)
        this._matricula=matricula
        this._carrera=carrera
        this._semestre=semestre
        this._hora=hora
    }
    mensaje(){
        console.log(`soy el alumno ${this._nombre} y estudio la carrera de ${this._carrera}`);
        
    }
}

let alumno1=new alumno("juan","sistemas",3)
alumno1.mensaje()