"use client";
import React, {useState} from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "../icons";
import { AcmeLogo } from "../AcmeLogo.jsx";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Input,
  DatePicker,
  Textarea,
} from "@nextui-org/react";

export default function App() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = (e) => {
    console.log(e.target);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Modal
          size="lg"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
          classNames={{
            backdrop:
              "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Creando Oferta para Transportación
                </ModalHeader>
                <ModalBody>
                  <div className="grid lg:grid-cols-2 gap-4">
                    <Input
                      className="lg:col-span-2"
                      type="file"
                      label="Foto de la mercancía"
                      name="photo"
                    />
                    <Input
                      className="lg:col-span-2"
                      type="text"
                      label="Mercancía a transportar"
                      name="title"
                    />
                    <Input type="number" label="Peso aprox. en Kgs" />
                    <Input type="number" label="Volumen aprox. en m3" />
                    <Input
                      type="number"
                      label="Precio de oferta"
                      color="success"
                      name="price"
                    />
                    <DatePicker
                      label="Fecha de Transportación"
                      className="max-w-[284px]"
                      name="transpDate"
                    />
                    <Textarea label="Comentario" className="lg:col-span-2" />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cancelar
                  </Button>
                  <Button color="success" onPress={onClose} type="submit">
                    Publicar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </form>
      <Navbar>
        <NavbarBrand>
          <AcmeLogo />
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  <p className="font-bold text-inherit">CUBATRUCK</p>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="lg:w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="Defina las características y condiciones de su cargamento para el estudio de los transportistas."
                startContent={icons.scale}
                onPress={onOpen}
              >
                Crear Oferta de Cargamento
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Revise y estudie las ofertas publicadas y seleccione la que más le convenga"
                startContent={icons.activity}
                href="/"
              >
                Mostrar Ofertas Publicadas
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="Conozca y contacte con nuestros transportistas. Evalue sus servicios ..."
                startContent={icons.flash}
                href="/registrados"
              >
                Mostrar Transportistas Registrados
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Revise el mapa de su país y conozca la ubicación de los cargamentos en oferta."
                startContent={icons.server}
              >
                Ver el Mapa
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Pague por pocisionar sus ofertas entre las primeras de la Lista."
                startContent={icons.user}
              >
                +Registro VIP
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarBrand>
        <NavbarContent
          className="hidden sm:flex gap-4"
          justify="center"
        ></NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Registrarse</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Entrar
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
