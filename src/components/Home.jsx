import React from 'react';
import { useForm } from 'react-hook-form';


const Home = () => {

    const {register, formState:{errors}, handleSubmit}= useForm();
    const onSubmit=(data,e)=>{
        console.log(data)
        e.target.reset()//esto borra el dato que estamos enviando en el html
        
    }

    const agregarVivienda=()=>{

    }

    return (
        <div className='container-home'>
            <img className='logo' src="./logo.png" alt="" srcset="" />
x|
            <h1 className='titulo'>Inserción de vivienda</h1>
            <h3>Introdusca los datos de la vivienda :</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contenedor-informacion">
                <div className="tipo-Vivienda container-items">
                    <span className='items'>Tipo de vivienda : </span>
                    <select className="selecionDeseada" name="item-ingresado"{...register("titulo", {
                    required: {value: true, message: 'esto es obligatorio'}
                    })}>
                      <option value="titulo">Por elegir</option>
                      <option value="valor1">Unifamiliar</option>
                      <option value="valor2">Colectivo</option>
                    </select>
                    <span>{errors.titulo && errors?.titulo.message}</span>
            </div>

            <div className="tipo-Zona container-items">
                <span className='items'>Zona : </span>
                    <select className="selecionDeseada" name="item-ingresado" {...register("titulo", {
                    required: {value: true, message: 'esto es obligatorio'}
                  })}>
                      <option value="titulo">Por elegir</option>
                      <option value="valor1">Rural</option>
                      <option value="valor2">Urbana</option>
                    </select>
                    <span>{errors.titulo && errors?.titulo.message}</span>
            </div>

            <div className="direccion container-items">
                <span className='items'>Direccion : </span>
                <input type="text" name="item-ingresado" id="" {...register("titulo", {
                    required: {value: true, message: 'esto es obligatorio'}
                  })}/>
                  <span>{errors.titulo && errors?.titulo.message}</span>
            </div>

            <div className="numero-De-Dormitorios container-items">
                <span className='items'>Número de domritorios : </span>
                
                <input type="checkbox" name="1" id=""  className='selector-habitacion'/>
                <span>1</span>
                <input type="checkbox" name="2" id=""  className='selector-habitacion' />
                <span>2</span>
                <input type="checkbox" name="3" id=""  className='selector-habitacion' />
                <span>3</span>
                <input type="checkbox" name="4" id=""  className='selector-habitacion' />
                <span>4</span>
                <input type="checkbox" name="5" id=""  className='selector-habitacion' />
                <span>5</span>

            </div>

            <div className="precio container-items">
                <span className='items'>Precio : </span>
                <input type="text" name="item-ingresado" id="" {...register("titulo", {
                    required: {value: true, message: 'esto es obligatorio'}
                  })}/>
                <span>$</span>
                <span>{errors.titulo && errors?.titulo.message}</span>
            </div>

            <div className="tamaño container-items">
                <span className='items'>Tamaño : </span>
                <input type="text" name="item-ingresado" id="" {...register("titulo", {
                    required: {value: true, message: 'esto es obligatorio'}
                  })}/>
                <span>metros cuadrados</span>
                <span>{errors.titulo && errors?.titulo.message}</span>
            </div>

            <div className="observaciones container-items">
                <span className='items'>Observaciones : </span>
                <input type="text" name="item-ingresado" id="" {...register("titulo", {
                    required: {value: true, message: 'esto es obligatorio'}
                  })}/>
                  <span>{errors.titulo && errors?.titulo.message}</span>
            </div>

            <button type='submit' onClick={agregarVivienda}> Insertar vivienda</button>

            </div>
            </form>
        </div>
    );
}

export default Home;
