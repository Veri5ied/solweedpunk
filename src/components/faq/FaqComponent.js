import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "When Presale",
      content: `No presale.`,
    },
    {
      title: "When Discord",
      content: `Now. <a href="https://discord.gg/7QKJdqSR">https://discord.gg/7QKJdqSR</a>`,
    },
    {
      title: "When FTX",
      content: `Sam??? `,
    },
    {
      title: "When Solanart",
      content: <p>Never</p>,
    },
  ],
};

const styles = {
  bgColor: "transparent",
  rowTitleColor: "#fff",
  rowContentColor: "#a2b4d2",
  rowContentTextSize: "14px",
  rowTitleTextSize: "16px",
  arrowColor: "#fff",
};

const config = {
  animate: true,
  arrowIcon: "v",
  tabFocus: true,
};

export default function FaqComponent() {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}
