import fluxoDeCaixa2 from "../assets/Fluxo_Caixa2.png";
import fluxoDeCaixa from "../assets/Fluxo_Caixa.png";
import Dre from "../assets/DRE.png";
import Produtos from "../assets/Produtos.png";
import comparacoes from "../assets/mulher_comparando.png";
import planejamento from "../assets/planejamento.jpg";
import confuso from "../assets/confuso.jpg";
import { BsReception4 } from "react-icons/bs";
import bannerImage from "../assets/banner_grafico.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { Slide, Btn } from "./style.tsx";

export default function Dashboard() {
  //const [karenTeste, setKarenTeste] = useState("");

  const dada_Img = [
    { id: "1", image: fluxoDeCaixa },
    { id: "2", image: fluxoDeCaixa2 },
    { id: "3", image: Dre },
    { id: "4", image: Produtos },
  ];
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* header */}
      <div
        style={{
          width: "90%",
          display: "flex",
          height: 80,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
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
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {/* Added gap between items */}
          <a
            href="#"
            style={{ color: "#fff", textDecoration: "none", fontWeight: "600" }}
          >
            contate-nos
          </a>
          <a
            href="#"
            style={{ color: "#fff", textDecoration: "none", fontWeight: "600" }}
          >
            nossos serviços
          </a>
          <a
            href="#"
            style={{ color: "#fff", textDecoration: "none", fontWeight: "600" }}
          >
            quem somos
          </a>
        </div>
        <div
          style={{
            width: "100%",
            height: 1,
            background: "#fff",
            position: "absolute",
            top: 69,
          }}
        ></div>
      </div>
      {/* body banner */}
      <div
        style={{
          width: "100%",
          height: 400,
          //background: "blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "40%",
            height: 400,
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
            marginRight: 60,
          }}
        >
          <h2
            style={{
              fontWeight: "400",
              textAlign: "left",
              fontSize: 45,
            }}
          >
            Transforme suas ideias em <strong>Realidade</strong>
          </h2>
          <p
            style={{
              textAlign: "left",
              fontWeight: "400",
              fontSize: 18,
              //backgroundColor: "pink",
              //width: "40%",
            }}
          >
            Transformar suas ideias de negócios através da análise de dados é
            uma maneira poderosa de impulsionar o sucesso da sua empresa. Ao
            coletar e analisar dados relevantes, você pode obter insights
            valiosos sobre o comportamento dos clientes, identificar tendências
            de mercado e otimizar processos internos.
          </p>
          <div
            style={{
              display: "flex",
              width: 540,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Btn
              className={"btn"}
              //onClick={() => setKarenTeste("teste")}
              style={{
                width: 200,
                height: 40,
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Contate-nos
            </Btn>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            backgroundImage: `url(${bannerImage})`,
            width: "40%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: 400,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        />
      </div>
      {/* body */}
      <div
        style={{
          width: "100%",
          height: 250,
          display: "flex",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h2 style={{ fontSize: 25, fontWeight: 300 }}>
              Tenha controle dos seus resultados
            </h2>
            <p style={{ fontSize: 20, fontWeight: 300 }}>
              Nossa solução traz para sua empresa painéis visuais que apresentam
              seus dados de forma dinâmica e intuitiva. Personalize{" "}
              <strong>gráficos</strong>, <strong>tabelas</strong>,{" "}
              <strong>mapas</strong> e outros elementos que mostram as
              tendências, os padrões e as correlações dos seus dados. Você terá
              o Controle total dos seus resultados e poderá acessa-los de
              qualquer dispositivo, a qualquer hora e em qualquer lugar..
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "80%",
          height: 330,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 290,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Slide>
            <Swiper
              modules={[EffectCoverflow]}
              effect="coverflow"
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              /*   scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")} */
            >
              {dada_Img.map((item, index) => (
                <SwiperSlide key={index}>
                  <img className={"slide-item"} alt="slider" src={item.image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Slide>
        </div>
      </div>
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
            alignItems: "baseline",
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
                backgroundPosition: "center",
              }}
            />
            <div
              style={{
                width: "100%",
                paddingRight: 10,
                paddingLeft: 10,
                height: 230,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <h3 style={{ margin: 0, padding: 0 }}>
                Organização de <strong>dados</strong>
              </h3>
              <p style={{ margin: 0, padding: 0 }}>
                Organização dos seus Dados Dashboards permitem a visualização de
                dados complexos de forma clara e intuitiva. Gráficos, tabelas
                dinâmicas e indicadores visuais que ajudam a entender
                rapidamente as informações, facilitando a tomada de decisões.
              </p>
            </div>
          </div>
          <div
            style={{
              width: "40%",
              height: 500,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={planejamento}
              alt="um homem comparando dados"
              style={{ width: "100%", height: 280, borderRadius: 20 }}
            />
            <div
              style={{
                width: "100%",
                paddingRight: 10,
                paddingLeft: 10,
                height: 180,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
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
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={comparacoes}
              alt="um homem comparando dados"
              style={{ width: "100%", height: 280, borderRadius: 20 }}
            />
            <div
              style={{
                width: "100%",
                paddingRight: 10,
                paddingLeft: 10,
                height: 180,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <h3 style={{ margin: 0, padding: 0 }}>
                Análise <strong>Comparativa</strong>
              </h3>
              <p style={{ margin: 0, padding: 0 }}>
                Dashboards permitem a comparação de diferentes conjuntos de
                dados de forma eficiente. Isso é especialmente útil para
                monitorar KPIs (Indicadores Chave de Desempenho) e identificar
                tendências ao longo do tempo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
