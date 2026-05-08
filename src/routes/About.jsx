import CardImg from "../assets/NewsLetter.png";
import TeamSection from "../components/TeamSection";

const team = [
  { id: 1, name: "Marcus", role: "Director", image: CardImg },
  { id: 2, name: "Sienna", role: "Architect", image: CardImg },
  { id: 3, name: "Elias", role: "Engineer", image: CardImg },
  { id: 4, name: "Elia", role: "Engineer", image: CardImg },
  { id: 5, name: "Eli", role: "Engineer", image: CardImg },
  { id: 6, name: "El", role: "Engineer", image: CardImg },
  { id: 7, name: "Eias", role: "Engineer", image: CardImg },
  { id: 8, name: "Elas", role: "Engineer", image: CardImg },
  { id: 9, name: "Lias", role: "Engineer", image: CardImg },
  { id: 10, name: "ELlias", role: "Engineer", image: CardImg },
  { id: 11, name: "EiLas", role: "Engineer", image: CardImg },
  { id: 12, name: "EliaLs", role: "Engineer", image: CardImg },
];

const About = () => {
  return (
    <div className="mb-88 mt-55">
      <TeamSection/>
      {/* Hero Section */}
      <section className="bg-white dark:bg-slate-950 py-20">
        <div className="max-w-6xl px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl mb-6 md:text-5xl font-bold text-black dark:text-white">
              Meet The <span className="text-orange-500">Team</span>
            </h1>
            <p className="text-lg text-gray-800 dark:text-gray-400 mb-0 text-left w-1/2">
              We are a team of passionate professionals dedicated to providing
              top-notch services in web development, design and digital
              marketing. Our mission is to help businesses thrive in the digital
              world by delivering innovative solutions tailored to their unique
              needs.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-3 grid-rows-4 gap-6 bg-gray-200 p-6 pt-16 mt-0 dark:bg-gray-900">

        {team.map((member) => (
          <div key={member.id} className="m-4 group bg-white grayscale hover:grayscale-0 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-l shadow-amber-700/50 dark:bg-slate-950">
            <img src={member.image} alt={member.name} className="w-full h-48 transition duration-300 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-black dark:text-white">{member.name}</h3>
              <p className="text-gray-800 dark:text-gray-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
