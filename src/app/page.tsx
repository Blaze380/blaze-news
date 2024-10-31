import LeftTab from "@/components/left-tab/LeftTab";
import MainBody from "@/components/main-body/MainBody";

export default function Home () {
  return (
    <section className="flex w-full mt-10 h-full max-md:flex-col-reverse max-md:space-y-20">
      <MainBody />
      <LeftTab/>
    </section>
  );
}
