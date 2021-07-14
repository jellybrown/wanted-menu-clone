import React, { useState } from "react";
import { Content } from "./App.style";
import Header from "./components/Header/Header";

const App = () => {
  const [activeExplore, setActiveExplore] = useState(false);

  return (
    <>
      <Header
        activeExplore={activeExplore}
        setActiveExplore={setActiveExplore}
      />
      <Content
        onMouseOver={() => setActiveExplore(false)}
        isActive={activeExplore}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          tempora perspiciatis expedita, autem veritatis, distinctio voluptate,
          placeat reiciendis voluptatem velit quibusdam quaerat porro. Sit non
          exercitationem earum, repellendus incidunt aliquid cupiditate quo
          quaerat necessitatibus nesciunt minima ex, cum mollitia qui, placeat
          aspernatur magni est? Debitis quae id quasi exercitationem rerum
          quaerat nobis, quidem iure unde, laudantium maiores! Magnam pariatur
          nostrum soluta deserunt sequi itaque beatae ipsa reprehenderit
          impedit? Magnam accusantium voluptatum velit, totam distinctio
          accusamus modi autem similique saepe fugiat, facere itaque vel ipsum
          odit ad nihil. Iste rem aliquam expedita itaque molestiae quam atque,
          aut dicta beatae temporibus incidunt, nisi iusto impedit facere et sed
          quidem voluptates. Ab soluta laudantium neque sit vitae, eaque illo
          repellat libero, itaque, placeat sint doloribus. Hic molestiae
          asperiores quos nisi perferendis est sed, omnis quibusdam saepe natus
          aut beatae ab? Laudantium suscipit, est ad veritatis debitis ipsa sunt
          praesentium eum unde incidunt esse, nisi autem cum aut tempora?
          Consectetur repellat, recusandae voluptatibus eius beatae placeat
          odit, consequatur molestiae, nulla suscipit explicabo distinctio vel
          vero sed non eos accusamus quidem nam perspiciatis? Veritatis,
          obcaecati asperiores in provident eum praesentium eos odio sit atque
          magnam ex, quae iure delectus? Accusantium dolor sit fugit libero
          perferendis.
        </p>
      </Content>
    </>
  );
};

export default App;
