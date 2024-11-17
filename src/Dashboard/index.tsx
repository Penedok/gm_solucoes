import fluxoDeCaixa2 from "../assets/Fluxo_Caixa2.png";
import fluxoDeCaixa from "../assets/Fluxo_Caixa.png";
import grafico_escuro from "../assets/grafico_escuro.png";
import grafico_brasil from "../assets/grafico_brasil.png";
import grafico_google from "../assets/grafico_google.png";
import Dre from "../assets/DRE.png";
import Produtos from "../assets/Produtos.png";
import comparacoes from "../assets/mulher_comparando.png";
import planejamento from "../assets/planejamento.jpg";
import confuso from "../assets/confuso.jpg";
import { BsReception4,BsTablet, } from "react-icons/bs";
import { CgSandClock } from 'react-icons/cg'
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import {
  Button, Container, HeaderDiv, SliderButton, SlideImg, AreaDivHeader,
  ItensHeader1,ItensHeader2,BannerDiv,BannerDivTexto,BannerH2,BannerP,
  BannerDivIMG,GraficoSliderContainer,PortifolioClienteContainer,
  ModalContainer,ModalCaixa,CardContainer,CardCaixa,ItemCardDestaque,
  ItemCard01,ItemCard02

} from "./Dashboard.style";


export default function Dashboard() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const dada_Img = [
    { id: "1", image: grafico_escuro },
    { id: "2", image: grafico_google },
    { id: "3", image: grafico_brasil },
    { id: "4", image: Produtos },
    { id: "5", image: fluxoDeCaixa },
    { id: "6", image: fluxoDeCaixa2 },
    { id: "7", image: Dre },
  ];


  const openModal = (image:any) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };
  return (
    <Container>
      {/* header */}
      <HeaderDiv >
        <AreaDivHeader>
          <ItensHeader1>
            <BsReception4
              style={{
                width: 50,
                height: 50,
                color: "#fff",
                marginRight: 10,
              }}
            />
            <h2
              style={{
                color: "#fff",
                fontSize: 25,
                textAlign: "center",
              }}
            >
              GM Soluções em dados
            </h2>
          </ItensHeader1>
          <ItensHeader2>
            {/* Added gap between items */}
            <a href="#" style={{ color: "#fff", textDecoration: "none", fontWeight: '600' }}>
              contate-nos
            </a>
            <a href="#" style={{ color: "#fff", textDecoration: "none", fontWeight: '600' }}>
              nossos serviços
            </a>
            <a href="#" style={{ color: "#fff", textDecoration: "none", fontWeight: '600' }}>
              quem somos
            </a>
          </ItensHeader2>
        </AreaDivHeader>

      </HeaderDiv>
      <div style={{width:'100%', height:"100%", display:'flex', flexDirection:'column', justifyContent:'space-around',
         alignItems:' center'}}>
          {/* body banner */}
        <BannerDiv>
          <BannerDivTexto>
            <BannerH2>
              Transforme suas ideias em <strong>Realidade</strong>
            </BannerH2>
            <BannerP
            
            >
              Transformar suas ideias de negócios através da análise de dados é
              uma maneira poderosa de impulsionar o sucesso da sua empresa. Ao
              coletar e analisar dados relevantes, você pode obter insights
              valiosos sobre o comportamento dos clientes, identificar tendências
              de mercado e otimizar processos internos.
            </BannerP>
            <div style={{display:'flex', width:"100%"}}>
              <Button
                //onClick={() => setKarenTeste("teste")}
                style={{ width: 200, height: 40, fontSize: 18, fontWeight: "600" }}
              >
                Contate-nos
              </Button>
            </div>
          </BannerDivTexto>
          <BannerDivIMG
          />
        </BannerDiv>
        <CardContainer>
          <CardCaixa>
            <ItemCardDestaque >
              <BsReception4
                style={{
                  width: 50,
                  height: 50,
                  color: "#fff",
                }}
              />
              <h3 style={{color:'#fff', textAlign:'center',paddingLeft:30,paddingRight:30}}>Tenha controle dos seus Resultados</h3>
              <p style={{color:'#fff',textAlign:'center',paddingLeft:30,paddingRight:30,}}>Nossa solução traz para sua empresa painéis visuais que apresentam seus
              dados de forma dinâmica e intuitiva.</p>
              <Button backgroundColor="#fff"
                //onClick={() => setKarenTeste("teste")}
                style={{ width: 200, height: 40, fontSize: 18, fontWeight: "400",marginBottom:10, color:'#000'}}
              >
                Saiba como 
              </Button>

            </ItemCardDestaque>
            <ItemCard01>
            <CgSandClock
              style={{
                width: 50,
                height: 50,
                color: "#000",
              }}
              />
              <h3 style={{color:'#000', textAlign:'center',paddingLeft:30,paddingRight:30}}>Não perca mais tempo</h3>
                <p style={{color:'#000',textAlign:'center',paddingLeft:30,paddingRight:30,}}>Nossas soluções automatizadas  economizam seu tempo para decisões.</p>
              
            </ItemCard01>
            <ItemCard02>
              <BsTablet
                style={{
                  width: 50,
                  height: 50,
                  color: "#000",
                }}
              />
            
              <h3 style={{color:'#000', textAlign:'center',paddingLeft:30,paddingRight:30}}>Seus dados a qualquer hora</h3>
                <p style={{color:'#000',textAlign:'center',paddingLeft:30,paddingRight:30,}}>Acesse informações essenciais de forma  rápida e prática, onde quer que você esteja.</p>
                
            </ItemCard02>
          </CardCaixa>
        </CardContainer>
        {/* body */}
        <PortifolioClienteContainer>
          <div
            style={{
              width: "80%",
              display: "flex",
              //alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            
              <h2 style={{ fontSize: 40, fontWeight: 600 }}>
                Nosso Portifolio
              </h2>
            
              <p style={{ fontSize: 20, fontWeight: 300 }}>
              Descubra nosso portfólio de dashboards inovadores, projetados para transformar dados complexos em insights claros e  acionáveis. Com nossas soluções de visualização, você pode monitorar métricas-chave em tempo real, facilitando decisões estratégicas e melhorando a performance operacional. Explore como nossas  ferramentas podem impulsionar seu negócio a novos patamares de eficiência e sucesso.
              Estamos prontos para enfrentar novos desafios e contribuir para o sucesso dos nossos parceiros e clientes.
              </p>
          </div>
        </PortifolioClienteContainer>
        <GraficoSliderContainer>
            <SliderButton
              modules={[EffectCoverflow]}
              effect="coverflow"
              spaceBetween={0}
              slidesPerView={1} 
              navigation
              pagination={{ clickable: true }}
            >
              {dada_Img.map((item, index) => (
                <SwiperSlide key={index}>
                  <SlideImg
                    alt="slider"
                    src={item.image}
                    onClick={() => openModal(item?.image)}
                  />
                </SwiperSlide>
              ))}
            </SliderButton>

            {modalVisible && (
                <ModalContainer 
                onClick={closeModal}
                >
                  <ModalCaixa 
                    className="modal" 
                    onClick={closeModal}>
                    <img src={selectedImage || undefined} alt="Selected" style={{maxWidth: '100%', maxHeight: '100%'}} />
                  </ModalCaixa>
                </ModalContainer>
              )}
        </GraficoSliderContainer>
        <div
          style={{
            width: "80%",
            height: 700,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

          }}
        >
          <h3>
            Por que o uso do <strong>Dashboard</strong> é importante ?
          </h3>
          <div
            style={{
              width: "100%",
              height: 500,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              gap: 50,
              alignItems: 'baseline'

            }}
          >
            <div
              style={{
                width: "40%",
                height: 500,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",

              }}
            >
              <img
                src={confuso}
                alt="um homem comparando dados"
                style={{
                  width: "100%",
                  height: 280,
                  borderRadius: 20,
                  backgroundPosition: 'center'
                }}
              />
              <div style={{
                width: '100%', paddingRight: 10, paddingLeft: 10, height: 230, display: 'flex', flexDirection: 'column',
                justifyContent: 'space-around'
              }}>
                <h3 style={{ margin: 0, padding: 0 }}>
                  Organização de <strong>dados</strong>
                </h3>
                <p style={{ margin: 0, padding: 0 }}>
                  Organização dos seus Dados Dashboards permitem a visualização de
                  dados complexos de forma clara e intuitiva. Gráficos, tabelas
                  dinâmicas e indicadores visuais que ajudam a entender rapidamente
                  as informações, facilitando a tomada de decisões.
                </p>
              </div>
            </div>
            <div
              style={{
                width: "40%",
                height: 500,
                display: "flex",
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src={planejamento}
                alt="um homem comparando dados"
                style={{ width: "100%", height: 280, borderRadius: 20 }}
              />
              <div style={{
                width: '100%', paddingRight: 10, paddingLeft: 10, height: 180, display: 'flex', flexDirection: 'column',
                justifyContent: 'space-around'
              }}>
                <h3 style={{ margin: 0, padding: 0 }}>
                  Atualizações <strong>Automáticas</strong>
                </h3>
                <p style={{ margin: 0, padding: 0 }}>
                  Dashboards podem ser configurados para atualizar automaticamente
                  com novos dados. Isso garante que as informações estejam sempre
                  atualizadas, permitindo uma análise em tempo real.
                </p>

              </div>
            </div>
            <div
              style={{
                width: "40%",
                height: 500,
                display: "flex",
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={comparacoes}
                alt="um homem comparando dados"
                style={{ width: "100%", height: 280, borderRadius: 20 }}
              />
              <div style={{
                width: '100%', paddingRight: 10, paddingLeft: 10, height: 180, display: 'flex', flexDirection: 'column',
                justifyContent: 'space-around'
              }}>
                <h3 style={{ margin: 0, padding: 0 }}>
                  Análise <strong>Comparativa</strong>
                </h3>
                <p style={{ margin: 0, padding: 0 }}>
                  Dashboards permitem a comparação de diferentes conjuntos de dados
                  de forma eficiente. Isso é especialmente útil para monitorar KPIs
                  (Indicadores Chave de Desempenho) e identificar tendências ao
                  longo do tempo.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Container>
  );
}
