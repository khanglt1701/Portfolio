import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  brief,
  Briefcase,
} from 'lucide-react';
import DevImg from './DevImg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import Image from 'next/image';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Le Tuong Khang',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '(+84) 332 330 436',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'khanglt1701@gmail.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born in 1999',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Bachelor of Software Engineering',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Binh Quoi, p.28, Binh Thanh, HCM',
  },
];

const qualificantionData = [
  {
    title: 'education',
    data: [
      {
        university: 'Gia Dinh University',
        qualification: 'Bachelor of Software Engineering',
        years: '2018 - 2022',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Vuong Thanh Group',
        role: 'Back-end Developer',
        years: '03/2022 - 07/2022',
      },
      {
        company: 'FPT Software',
        role: 'Full-stack Developer',
        years: '07/2022 - 03/2024',
      },
      {
        company: 'Xsunt',
        role: 'Full-stack Developer',
        years: '04/2022 - Present',
      },
    ],
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      { name: 'HTML, CSS' },
      { name: 'Front-end Development' },
      { name: 'Clound Development' },
      { name: 'Back-end Development' },
    ],
  },
  {
    title: 'tools',
    data: [
      { imgPath: '/about/vscode.svg' },
      { imgPath: '/about/figma.svg' },
      { imgPath: '/about/notion.svg' },
      { imgPath: '/about/wordpress.svg' },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About me
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* Image */}
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px]
                h-[505px] bg-no-repeat relative'
              imageSrc='/about/developer.png'
            />
          </div>
          {/* Tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='persional'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='persional'>
                  Persional
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualification'
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className='text-lg mt-12 xl:mt-8'>
                <TabsContent value='persional'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Unmatched Service Quality for Over 10 years
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icon */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div>
                      <div>Language Skill</div>
                      <div className='border-b border-border'></div>
                      <div>English</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value='qualification'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      My Awesome Jouney
                    </h3>
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificantionData, 'experience').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificantionData, 'experience').data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div key={index} className='flex gap-x-8 group'>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificantionData, 'education').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificantionData, 'education').data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div key={index} className='flex gap-x-8 group'>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>What I Use Everyday</h3>
                    {/* skills */}
                    <div className='mb-16'>
                      <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, 'skills').data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'
                                key={index}
                              >
                                <div className='font-medium'>{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                        Tools
                      </h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* tool list */}
                      <div className='flex gap-x-8 justify-center xl:justify-start'>
                        {getData(skillData, 'tools').data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=''
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
