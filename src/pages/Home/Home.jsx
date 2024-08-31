import React, {useState, useEffect} from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/Layout/Layout.component';
import Button from '../../components/Button/Button.component';
import InputText from '../../components/Input/InputText/InputText.component';

import frenteLoja from '../../assets/frenteLoja.jpeg';
import carro1 from '../../assets/carros1.jpeg';
import carro2 from '../../assets/carros2.jpeg';
import carro3 from '../../assets/carros3.jpeg';

import isEmailValid from '../../@utils/isEmailValid';
import isNumberValid from '../../@utils/isNumberValid';

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { scrollToSection } from '../../components/NavBar/NavBar.component';

function Home() {

    const navigate = useNavigate();

    const [nomeValue, setNomeValue] = useState("");
    const [telValue, setTelValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [messageValue, setMessageValue] = useState("");

    const [disabledButton, setDisabledButton] = useState(true);

    const [loading, setLoading] = useState(false);

    const [errorName, setErrorName] = useState(false);
    const [errorTel, setErrorTel] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    useEffect(() => {
        if (nomeValue.length > 0 && telValue.length > 0 && emailValue.length > 0 && messageValue.length > 0) {
            setDisabledButton(false);
        } else {
            setDisabledButton(true);
        }
    },[nomeValue, telValue, emailValue, messageValue]);

    const HandleSendEmail = async (e) => {
        e.preventDefault();
        
        setLoading(true);
    
        const nameValid = nomeValue.length > 1;
        const emailValid = isEmailValid(emailValue);
        const telValid = isNumberValid(telValue);
        const messageValid = messageValue.length >= 20;
    
        setErrorName(!nameValid);
        setErrorEmail(!emailValid);
        setErrorTel(!telValid);
        setErrorMessage(!messageValid);
    
        if (!nameValid || !emailValid || !telValid || !messageValid) {
            setLoading(false);
            return;
        }
    
        try {
            const response = await fetch('https://express-vercel-test-nine.vercel.app/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: nomeValue,
                    telefone: telValue,
                    email: emailValue,
                    mensagem: messageValue,
                }),
            });
    
            if (response.ok) {
                alert('Email enviado com sucesso!');

                setNomeValue("");
                setTelValue("");
                setEmailValue("");
                setMessageValue("");

                setErrorTel(false);
                setErrorEmail(false);
            } else {
                alert('Falha ao enviar o email.');
            }
        } catch (error) {
            console.error('Erro ao enviar o email:', error);
            alert('Erro inesperado. Tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <Layout>
            {/* start section header */}
            <section className={styles.containerLanding} id="home">
                <div className={styles.divImageLanding}>
                    <img className={styles.imageLanding} src={frenteLoja} alt="frente da loja"/>
                </div>
                <div className={styles.divInfoLanding}>
                    <div className={styles.cardInfoLanding}>
                        <h3 className={styles.titleLanding}>Venda de Carros: <br/>Semi-Novos e Consignado</h3>
                        <p className={styles.paragraphLanding}>
                            Oferecemos uma seleção de veículos que combina qualidade e confiabilidade com preços competitivos. 
                            Seja para comprar ou consignar, nossa concessionária é o lugar certo para encontrar o carro ideal. 
                            Confie na nossa expertise para guiá-lo na escolha do carro que melhor atenda às suas necessidades e expectativas.
                            Aproveite nossas condições especiais e leve para casa o carro dos seus sonhos!
                        </p>
                        <Button title="Entre em contato!" className={styles.buttonLanding} onClick={() => scrollToSection('formulario')}/>
                    </div>
                </div>
            </section>
            {/* end section header */}

            {/* start section performance */}
            <section className={styles.sectionPadding} id="nossosServiços">
                <h2 className={styles.titlePerformance}>O que você vai encontrar aqui?</h2>
                <div className={styles.divFlexPerformance}>
                    <div className={styles.divPerformanceLeft}>
                        <div className={styles.divPerformanceInfo}>
                            <h3 className={styles.titlePerformanceInfoLeft}>Carros</h3>
                            <p className={styles.paragraphPerformanceInfoLeft}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ex dapibus,
                                auctor ligula sit amet, ullamcorper enim. Cras nec tempus quam. Nullam commodo 
                                fermentum sem non convallis. Etiam nec luctus nibh. Mauris nisl nulla, viverra 
                                sed tellus ut, congue pharetra orci.
                            </p>
                        </div>
                        <div className={styles.divPerformanceImage}>
                            <img className={styles.imagePerformance} src={carro1} alt="carros" />
                        </div>
                    </div>
                    <div className={styles.divPerformanceRight}>
                        <div className={styles.divPerformanceImage}>
                            <img className={styles.imagePerformance} src={carro2} alt="artigosAgropecuaria" />
                        </div>
                        <div className={styles.divPerformanceInfo}>
                            <h3 className={styles.titlePerformanceInfoRight}>Motos</h3>
                            <p className={styles.paragraphPerformanceInfoRight}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ex dapibus,
                                auctor ligula sit amet, ullamcorper enim. Cras nec tempus quam. Nullam commodo 
                                fermentum sem non convallis. Etiam nec luctus nibh. Mauris nisl nulla, viverra 
                                sed tellus ut, congue pharetra orci.
                            </p>
                        </div>
                    </div>
                    <div className={styles.divPerformanceLeft}>
                        <div className={styles.divPerformanceInfo}>
                            <h3 className={styles.titlePerformanceInfoLeft}>Atendimento</h3>
                            <p className={styles.paragraphPerformanceInfoLeft}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ex dapibus,
                                auctor ligula sit amet, ullamcorper enim. Cras nec tempus quam. Nullam commodo 
                                fermentum sem non convallis. Etiam nec luctus nibh. Mauris nisl nulla, viverra 
                                sed tellus ut, congue pharetra orci.
                            </p>
                        </div>
                        <div className={styles.divPerformanceImage}>
                            <img className={styles.imagePerformance} src={carro3} alt="artigosEcossistemas" />
                        </div>
                    </div>
                </div>
            </section>
            {/* end section performance */}

            {/* start section Location */}
            <section className={styles.containerAboutJacare} id="localizacao">
                <h2 className={styles.titleAboutJacare}>Onde estamos localizados?</h2>
                <div className={styles.divAboutJacare}>
                    <div className={styles.divTextAboutJacare}>
                        <p className={styles.paragraphAboutJacareD}>
                        Avenida dos Pescadores, 1234,<br/>Campos de São José,<br/>São José dos Campos, SP.
                        </p>
                    </div>
                </div>
            </section>
            {/* end section Location */}

            {/* start Form */}
            <section className={styles.sectionForm} id="formulario">
                {loading && (
                    <div className={styles.loadingForm}>
                        <AiOutlineLoading3Quarters className={styles.loading} />
                    </div>
                )}
                <div className={styles.divInfoForm}>
                    <div className={styles.cardInfoForm}>
                        <h3 className={styles.titleForm}>Entre já em contato!</h3>
                        <p className={styles.paragraphForm}>
                            Não perca tempo e garanta o carro dos seus sonhos ou a melhor opção de consignado na nossa concessionária. 
                            Com apenas alguns cliques, você pode preencher o nosso formulário, e nós verificaremos se você está apto 
                            para realizar um financiamento, dando o primeiro passo para conquistar o seu veículo. Aproveite nossas 
                            condições especiais e receba atendimento personalizado e de qualidade.
                        </p>
                    </div>
                </div>
                <form className={styles.form}>
                    <div className={styles.containerGroupForm}>
                        <div className={styles.divInputForm}>
                            <label className={styles.labelForm}>Nome:</label>
                            <InputText 
                                placeholder="Digite seu nome" 
                                className={`${styles.inputForm} ${errorName === true ? styles.errorInput : ''}`} 
                                onChange={(e) => setNomeValue(e.target.value)}
                                value={nomeValue}
                            />
                            {errorName && <span className={styles.error}>Insira um nome válido</span>}
                        </div>
                        <div className={styles.divInputForm}>
                            <label className={styles.labelForm}>Telefone:</label>
                            <InputText 
                                placeholder="(12) 99999-9999" 
                                className={styles.inputForm} 
                                onChange={(e) => setTelValue(e.target.value)}
                                value={telValue}
                            />
                            {errorTel && <span className={styles.error}>Insira um telefone valido</span>}
                        </div>
                        <div className={styles.divInputForm}>
                            <label className={styles.labelForm}>Email:</label>
                            <InputText
                                placeholder="email_usuario@gmail.com" 
                                className={styles.inputForm}
                                onChange={(e) => setEmailValue(e.target.value)}
                                value={emailValue}
                                />
                            {errorEmail && <span className={styles.error}>Insira um email valido</span>}
                        </div>
                        {/* arrumar a validação disso aqui */}
                        {/* <div className={styles.divInputForm}>
                            <label className={styles.labelForm}>CPF:</label>
                            <InputText
                                placeholder="123.456.789-00" 
                                className={styles.inputForm}
                                onChange={(e) => setEmailValue(e.target.value)}
                                value={emailValue}
                                />
                            {errorEmail && <span className={styles.error}>Insira um email valido</span>}
                        </div> */}
                        <div className={styles.divInputForm}>
                            <label className={styles.labelForm}>Mensagem:</label>
                            <textarea 
                                className={styles.textInputForm} 
                                placeholder='Insira pelo menos 20 caracteres...'
                                rows="10" 
                                maxlength="500" 
                                onChange={(e) => setMessageValue(e.target.value)}
                                value={messageValue}
                            ></textarea>
                            {errorMessage && <span className={styles.error}>Insira uma mensagem valida</span>}
                        </div>
                        <div className={styles.divButtonForm}>
                            <Button 
                                title="Enviar" 
                                className={`${styles.buttonForm} ${disabledButton ? styles.buttonFormDisabled : ''}` }
                                disabled={disabledButton}
                                onClick={(e) => HandleSendEmail(e)}
                            />
                        </div>
                    </div>
                </form>
            </section>
            {/* end Form */}
        </Layout>
    );
}

export default Home;
