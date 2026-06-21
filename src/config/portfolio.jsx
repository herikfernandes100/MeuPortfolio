import React from "react";
import { SiPython } from "react-icons/si";
import {
  FaGithub,
  FaReact,
  FaFigma,
  FaBootstrap,
  FaCode,
} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import {
  SiAltiumdesigner,
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";

export const portfolio = {
  name: "Hérik", // Usado para saudação
  fullName: "Hérik Fernandes dos Santos", // Usado para curriculo
  headline: {
    fWord: "Desenvolvedor",
    lWord: "Back-end",
  },
  heroDescription: "Estudante de Desenvolvimento de Software com foco em Java e Python. Apaixonado por tecnologia, arquitetura de sistemas e criação de soluções que geram valor para pessoas e empresas.",
  
  sidebar: {
    avatarUrl: "Media.jpg",
    bio: (
      <>
        Estudante de <span className="text-white/80">Desenvolvimento de Software</span> , focado em Java, Python e desenvolvimento Backend.
      </>
    ),
    cvUrl: "/Herik_Fernandes.pdf",
    cvLabel: "Baixar Currículo",
    isAvailable: true,
    availableText: "Disponível para oportunidades",
  },

  socialLinks: [
    {
      Icon: FaGithub,
      href: "https://github.com/herikfernandes100",
      hoverColor: "#e6edf3",
    },
    {
      Icon: CiLinkedin,
      href: "https://www.linkedin.com/in/herik-fernandes",
      hoverColor: "#0A66C2",
    },
  ],

  stats: [
    { count: "", label: "PROJETOS ACADÊMICOS" },
    { count: "", label: "ANOS ESTUDANDO TECNOLOGIA" },
    { count: "", label: "FOCO EM EVOLUÇÃO" },
  ],

  stackCards: [
    {
      title: "Back-end Stack",
      subtitle: (
        <>
          Java, Python, SQL, Spring Boot & Docker<br />
        </>
      ),
      Icon: SiAltiumdesigner,
      widthClass: "md:w-[45%]",
      cardHoverClass: "hover:border-orange-500/40 hover:bg-orange-500/[0.03] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)]",
      glowClass: "bg-orange-500/10 group-hover:bg-orange-500/20 animate-float",
      iconClass: "bg-orange-500/10 border-orange-500/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white",
      btnClass: "border-white/20 bg-white text-orange-600 hover:bg-orange-500 hover:text-white hover:border-orange-500"
    },
    {
      title: "Ferramentas",
      subtitle: (
        <>
          Git, GitHub, Docker, VSCode, <br />NetBeans & Banco de Dados
        </>
      ),
      Icon: FaCode,
      widthClass: "md:w-[55%]",
      cardHoverClass: "hover:border-green-400/40 hover:bg-green-400/[0.03] hover:shadow-[0_20px_40px_-15px_rgba(74,222,128,0.15)]",
      glowClass: "bg-green-400/10 group-hover:bg-green-400/20 animate-float delay-1000",
      iconClass: "bg-green-400/10 border-green-400/20 text-green-500 group-hover:bg-green-400 group-hover:text-black",
      btnClass: "border-black/20 bg-white text-green-600 hover:bg-green-400 hover:text-white hover:border-green-400"
    }
  ],

  skills: [
    { logo: <FaGithub />, title: "GitHub", disc: "Versionamento", color: "#E6EDF3" },
    { logo: <FaCode />, title: "Java", disc: "Back-end", color: "#F89820" },
    { logo: <SiPython />, title: "Python", disc: "Desenvolvimento", color: "#3776AB" },
    { logo: <FaCode />, title: "SQL", disc: "Banco de Dados", color: "#336791" },
    { logo: <FaCode />, title: "MySQL", disc: "Banco Relacional", color: "#00758F" },
    { logo: <FaCode />, title: "Spring Boot", disc: "Framework Java", color: "#6DB33F" },
    { logo: <FaCode />, title: "Docker", disc: "Containers", color: "#2496ED" },
    { logo: <FaCode />, title: "Git", disc: "Controle de Versão", color: "#F05032" },
  ],

  projects: [

    {
      id: 1,
      link: "#",
      pic: "servidor.png",
      heading: "Servidor",
      discr: "Projeto de infraestrutura observável com Go, Docker e stack Prometheus/Grafana, com automação via Ansible e monitoramento de métricas HTTP.",
      tags: [
        { name: "Go", icon: <FaCode color="#00ADD8" /> },
        { name: "Docker", icon: <FaCode color="#2496ED" /> },
        { name: "Prometheus", icon: <FaCode color="#E6522C" /> },
        { name: "Grafana", icon: <FaCode color="#F46800" /> },
        { name: "Ansible", icon: <FaCode color="#EE0000" /> },
      ],
    },
    {
      id: 2,
      link: "#",
      pic: "manutencao-preditiva.png",
      heading: "Manutenção Preditiva",
      discr: "Sistema de manutenção preditiva para indústria, utilizando machine learning para prever falhas em equipamentos.",
      tags: [
        { name: "Mongo", icon: <SiMongodb color="#47A248" /> },
        { name: "Nextjs", icon: <RiNextjsLine color="#FFFFFF" /> },
        { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
      ],
    },
    {
      id: 3,
      link: "#",
      pic: "rbf-reconhecimento-padroes.png",
      heading: "RBF em Reconhecimento de Padrões",
      discr: "Rede neural RBF desenvolvida em Python para reconhecimento de padrões, com implementação manual do modelo e foco em classificação de dados.",
      tags: [
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "Machine Learning", icon: <FaCode color="#888888" /> },
      ],
    },
    {
      id: 4,
      link: "#",
      pic: "pmc-reconhecimento-padroes.png",
      heading: "PMC em Reconhecimento de Padrões",
      discr: "Rede neural PMC desenvolvida em Python para reconhecimento de padrões, com implementação manual do modelo e foco em classificação de dados.",
      tags: [
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "Machine Learning", icon: <FaCode color="#888888" /> },
      ],
    },
    {
      id: 5,
      link: "#",
      pic: "pmc-aproximacao-funcoes.png",
      heading: "PMC em Aproximação de Funções",
      discr: "Rede neural PMC desenvolvida em Python para aproximação de funções, com implementação manual do modelo e foco em regressão de dados.",
      tags: [
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "Machine Learning", icon: <FaCode color="#888888" /> },
      ],
    },
    {
      id: 6,
      link: "#",
      pic: "adaline.png",
      heading: "Adaline",
      discr: "Rede neural Adaline desenvolvida em Python, com implementação manual do modelo e foco em classificação de dados.",
      tags: [
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "Machine Learning", icon: <FaCode color="#888888" /> },
      ],
    },
    {
      id: 7,
      link: "#",
      pic: "projeto4.png",
      heading: "Perceptron",
      discr: "Rede neural Perceptron desenvolvida em Python, com implementação manual do modelo e foco em classificação de dados.",
      tags: [
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "Machine Learning", icon: <FaCode color="#888888" /> },
      ],
    },
    {
      id: 8,
      link: "#",
      pic: "rouba-montes.png",
      heading: "Rouba Montes",
      discr: "Jogo de cartas desenvolvido em C, com uso de pilhas e listas duplamente encadeadas, permitindo múltiplos jogadores e mecânicas de compra, descarte, roubo e ranking final.",
      tags: [
        { name: "C", icon: <FaCode color="#A8B9CC" /> },
      ],
    },
    {
      id: 9,
      link: "#",
      pic: "ludo.png",
      heading: "Ludo",
      discr: "Implementação do clássico jogo Ludo em C, executado no terminal, com suporte para 2 a 4 jogadores e objetivo de levar todas as peças até a vitória.",
      tags: [
        { name: "C", icon: <FaCode color="#A8B9CC" /> },
      ],
    },
    {
      id: 10,
      link: "#",
      pic: "calculadora.png",
      heading: "Calculadora",
      discr: "Calculadora científica desenvolvida em Java Swing (GUI), com suporte a operações matemáticas básicas e avançadas.",
      tags: [
        { name: "Java", icon: <FaCode color="#F89820" /> },
        { name: "Swing", icon: <FaCode color="#4B8BBE" /> },
        { name: "GUI", icon: <FaCode color="#888888" /> },
      ],
    }
    
  ],

  experience: [
    {
      heading: "SDR",
      para: "Atuação na prospecção de clientes, qualificação de leads e desenvolvimento de relacionamento comercial com empresas de tecnologia.",
      date: "Jun, 2026 – Atual",
      active: true,
    },
    {
      heading: "Eletroeletrônico",
      para: "Atuação em manutenção eletromecânica, automação industrial e análise de falhas, com experiência em CLPs, IHMs, painéis elétricos e sistemas industriais. Foco em eficiência operacional, resolução de problemas e melhoria contínua.",
      date: "Ago, 2023 – Mar, 2026",
    },
    {
      heading: "Eletricista 2",
      para: "Atuação em automação industrial e adequação de máquinas às normas NR10 e NR12, com experiência em CLPs, painéis elétricos e soluções voltadas à segurança e eficiência operacional.",
      date: "Nov, 2021 – Mar, 2023",
    },
  ],

  contact: {
    formspreeActionUrl: "https://formspree.io/f/xnjkakzk",
    title: {
      fWord: "VAMOS",
      lWord: "CONVERSAR",
    },
    labels: {
      name: "Seu Nome",
      email: "Endereço de Email",
      subject: "Assunto de Interesse",
      message: "Mensagem",
      submit: "Enviar Mensagem",
    },
    placeholders: {
      name: "Fulano",
      email: "endereço@exemplo.com",
      message: "",
    },
    subjects: [
      { value: "job", label: "Oportunidade de Trabalho" },
      { value: "project", label: "Projeto ou Parceria" },
      { value: "contact", label: "Entrar em Contato" },
    ],
  },

  footer: {
    text: "Desenvolvido por ",
    developerName: "Hérik Fernandes",
  }
};
