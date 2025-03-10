import avatarPic from "../../public/images/avatar.png";

export function AboutMe() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <img
          className="size-16 rounded-full"
          src="/images/avatar.png"
          alt="tulski's avatar"
        />
        <div className="font-medium dark:text-white">
          <div className="text-xl">Michał Tułowiecki</div>
          <div className="text-base text-gray-500 dark:text-gray-400">
            software engineer
          </div>
        </div>
      </div>
      <p>
        I'm a home grown dev based in Warsaw (Poland). As a strong advocate of
        Software Craftsmanship, I love knowledge sharing and helping others
        grow. I constantly strive to raise the bar for professional software
        development. After work, you’ll find me climbing.
      </p>
    </div>
  );
}
