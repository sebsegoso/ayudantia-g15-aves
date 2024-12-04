import AveCard from "@/components/AveCard.vue";
import { mount } from "@vue/test-utils";

describe("AveCard.vue", () => {
  // ave inventado que usaremos para testear
  const mockAve = {
    uid: "76-buteo-albigula",
    name: { spanish: "Nombre en español", latin: "Nombres ens latins" },
    images: {
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3099/17082018024245aguilucho_chico_tomas_rivas_web.200x0.jpg",
    },
  };

  it("Muestra correctamente el nombre del ave", () => {
    const wrapper = mount(AveCard, {
      props: { ave: mockAve },
    });

    expect(wrapper.find("h5").text()).toContain(mockAve.name.spanish);
  });

  it("Muestra la imagen del ave", () => {
    const wrapper = mount(AveCard, {
      props: { ave: mockAve },
    });

    const img = wrapper.find("img");

    expect(img.exists()).toBeTruthy();
    expect(img.attributes("src")).toBe(mockAve.images.thumb);
  });

  it("el link a vista de detalle es correcto", () => {
    const wrapper = mount(AveCard, {
      props: { ave: mockAve },
    });

    const link = wrapper.find(".btn");

    expect(link.attributes("to")).toBe(`/aves/${mockAve.uid}`)
  });
});
