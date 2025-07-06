import MemorySection from './components/MemorySection';

const memories = [
  { image: '/images/1.jpeg', title: 'My First Photo of You', description: 'It was a cafe hopping sesh with one hop, but I gained so much more than matcha.' },
    
  { image: '/images/2.jpeg', title: 'Our First Date', description: 'I remember you hiding your silly email, that was when I started falling a little. You also stole their plushy. Shouldve known you are a kleptomaniac by then.' },
    { image: '/images/18.png', title: 'Our First Karaoke', description: 'I knew you were a swiftie so I wanted to flex my skills for so long and so when you said you were at a booth I rushed from a NYUNYU shopping session with Nani and came straight there. we got so touchy then, I was like damn this girl might like me.' },
    { image: '/image/19.jpeg', title: 'First Time in Ivy House', description: 'We were gonna go to Olive Young but someone wokeu p late and let me in their room I went to get my KUBA jacket and strategically left it in your room so I could come back later and then we went to Seongsu anyway. The beginning of colonisation.' },
    { image: '/images/16.JPG', title: 'When I First Truly Wished for You', description: 'This was at Nuldam Space, you werent there but this was when I admitted to myself I really wanted you, I was really hoping youd be the one Id been waiting so long for.' },
    {image: '/images/17.JPG', title: 'Random Memory(gambling)', description: 'Our dinner was kind of mid, I remember you forgot your wallet, we talked alot of gossip together and then we went gambling. This photo was special to me because it was the first time I flexed you to my friends. I smiled like an idiot all night thinking about it.' },
  { image: '/images/3.jpeg', title: 'My First Favourite Photo of You', description: 'We were taking cherry blossom photos, I loved it so much it was my wallpaper, I was head over heels for you by then.' },
  { image: '/images/4.jpeg', title: 'Buddhas Birthday', description: 'I remembered you wanted a shoulder ride, and I wasnt able to give one at the rave, aah back when I was strong.' },
  { image: '/images/5.jpeg', title: 'Babysitting Meegan', description: 'She became alot more educated under my watch, but both of us missed her mom in Taiwan. It was around the first time I realised I might have to say goodbye to you after Seoul and teared up after a long time. I also wondered if you were falling like I was.' },
  { image: '/images/6.jpeg', title: 'The Day We Made it Official', description: 'You were dyeing your hair, I gave you a flower, we used the leftover kbbq meat and watched Mufasa, it was a special day for me.' },
  { image: '/images/7.jpeg', title: 'Coldplay', description: 'I wanted to watch coldplay back in NZ before I came but I couldnt but seeing it in Seoul with TWICE and you was so much better' },
  { image: '/images/8.jpeg', title: 'Random Memory(Swing)', description: 'It wasnt flashy but it was moments like this that made me realise I was in Love and falling harder every day.' },
  { image: '/images/9.jpeg', title: 'The Best Food We had Together', description: 'Oh that crispy duck, yum yum that duck, I know you still remember the duck too.' },
  { image: '/images/10.jpeg', title: 'My Favourite Photo of Us', description: 'There is something so pure in this photo, I think it was the happiest Ive ever been' },
  { image: '/images/11.jpeg', title: 'World DJ', description: 'I never understood raves and still dont but holding and protecting you through it made even that feel satisfying.' },
  { image: '/images/12.jpeg', title: 'Inspire', description: 'Extremely inconvenient to get to but the art gallery and the fancy table with the mid food and then we went to hongdae to do archery will remain one of my fondest memories.' },
  { image: '/images/13.jpeg', title   : 'Cruise', description: 'I really didnt expect this to be that good, you really cooked with this one though you did almost make me drink enough beer to throw up.' },
  { image: '/images/14.jpeg', title: 'Jeju', description  : 'Not the best start, but Im glad we made the trip ours, I tried really hard to make sure you wouldnt leave disappointed with one of our last memories, I wanted to see your smile run brightest here maybe for the last time. I hope I succeeded.' },
  { image: '/images/15.jpeg', title: 'Last Photo With You', description: 'On the way to the airport, I was so fucking sad I was already crying while you slept, then the stupid taxi driver had to make us rush our goodbye hug with the wrong stop too. I cried for hours on the plane, hoping that wouldnt be the last time I saw you, and if you missed me even close to how much I was feeling.' },



];

export default function App() {
  return (
    <main>
      {memories.map((mem, index) => (
        <MemorySection key={index} {...mem} />
      ))}
    </main>
  );
}
