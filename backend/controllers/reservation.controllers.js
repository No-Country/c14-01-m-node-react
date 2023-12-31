import reservartionModel from "../models/reservationModel.js";
import config from "../utils/config.js";
import {transport} from "../utils/transport.js";
import { emailTemplate } from "../utils/email.template.js";

const {EMAIL_USER} = config;

export const allReservations = async (req,res) => {
    try {
        const reservations = await reservartionModel.find();
        
        res.status(200).send({messege : "all reservations found", payload:reservations })

    } catch (error) {
        res.status(500).json({ error: "Error al obtener las reservas" });
    }
}

export const createReservation = async (req, res) => {
    try {

        const {first_name, last_name, email, title, price, location, initialDate, endDate, guests, image} = req.body;

        const reservationData = {
            first_name,
            last_name,
            email,
            title,
            price,
            location,
            initialDate,
            endDate,
            guests,
            reservationDate : new Date().toLocaleString(),
            image
        };



        const reservationCreated = await reservartionModel.create(reservationData);

        const sentEmail = await transport.sendMail({
            from: `${EMAIL_USER}`,
            to: email,
            subject: "Reservation created successfully!!",
            html:emailTemplate.passwordRestoreEmail(first_name, last_name,email, price, title, location, initialDate, endDate, guests, image) ,
            text: "Testin email sent",
            attachments: [],
        });
    
        if (!sentEmail) throw new Error(`Email send failure`);

        res.status(201).json(reservationCreated);
        
    } catch (error) {
        res.status(500).json({ error: "Error al crear la reserva" , error: error });
    }
}

export const reservationByEmail = async (req,res) => {
    try {

        const  {email}  = req.params;
        const reservation = await reservartionModel.find({email : email});

        if (reservation) {
            res.status(200).json(reservation);
          } else {
            res.status(404).send({ message: "Email del usuario no encontrado" });
          }
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la reserva" });

    }
}

export const updateReservation = async (req, res) => {
    try {
      const { _id } = req.params;
  
      const reservation = await reservartionModel.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
  
      if (reservation) {
        res
          .status(200)
          .json({ message: "Reserva actualizado con exito", user: reservation });
      } else {
        res.status(404).json({ mensaje: "Reserva no encontrado" });
      }
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar la reserva con id" });

    }
  };

export const deleteReservations = async (req, res) => {
  const {id} = req.params;
    try {    
        
        const reservation = await reservartionModel.findByIdAndDelete(id);

        if (!reservation) {
            res.status(400).send({message: 'Reservation not found or deleted'});
        }

        res.status(200).send({message: 'reservation was successfully deleted', payload: reservation});
    } catch (error) {
        res.status(500).json({ error: `Error al eliminar la reserva con id ${id}` });
    }
}

