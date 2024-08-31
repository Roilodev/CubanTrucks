"use client";
import { useState } from "react";
import { Card, CardHeader, CardFooter, Image, Link } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button, Checkbox, Input } from "@nextui-org/react";

export default function BidCard({
  image,
  title,
  description = "Breve descripción del Medio de Transporte y sus servicios",
  precio,
  volumen,
  peso,
  solicitudes = 0,
  distancia,
}) {
  const [solCantidad, setSolCantidad] = useState(solicitudes);
  const addSol = () => {
    setSolCantidad(solCantidad + 1);
  };
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}<p className="text-black text-tiny">Oferta actual: ${precio}</p></ModalHeader>
              <ModalBody>
                <Input
                  type="number"
                  label="Tu Oferta"
                  placeholder="0.00"
                  defaultValue={precio}
                  labelPlacement="outside"
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Enviar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 flex-col items-start bg-white/80">
          <p className="text-black text-tiny">Peso total de la carga: {peso}</p>
          <h4 className="text-black font-medium text-2xl">{title}</h4>
          {solCantidad > 0 && (
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full end-2 dark:border-gray-900">
              {solCantidad}
            </div>
          )}
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={image}
        />
        <CardFooter className="absolute bg-white/90 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Distancia: {distancia}</p>
            <p className="text-black text-tiny">Oferta actual: ${precio}</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm" onPress={onOpen}>
            Licitar
          </Button>
        </CardFooter>
      </Card>
    </>

  );
}
