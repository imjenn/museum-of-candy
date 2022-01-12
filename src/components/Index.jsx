const Index = () => {

    // function to import all images
    const importAll = (r) => {
        let images = {};
        r.keys().map(item => {
            images[item.replace('./', '')] = r(item);
        });
        return images;
    }

    const images = importAll(require.context('./images', false, /\.png/));

    return (
        <div className="bg-red-200">
            <div className="flex lg:flex-row justify-around sm:flex-col">
                <div className="flex-1 self-center text-center sm:py-8">
                    <h1 class="text-white text-7xl">MUSEUM<span class="text-pink-500">/</span>OF<span class="text-pink-500">/</span>CANDY</h1>
                    <h1 class="text-white text-7xl">MUSEUM<span class="text-pink-500">/</span>OF<span class="text-pink-500">/</span>CANDY</h1>
                    <h1 class="text-white text-7xl">MUSEUM<span class="text-pink-500">/</span>OF<span class="text-pink-500">/</span>CANDY</h1>
                    <h1 class="text-white text-7xl">MUSEUM<span class="text-pink-500">/</span>OF<span class="text-pink-500">/</span>CANDY</h1>
                    <h1 class="text-white text-7xl">MUSEUM<span class="text-pink-500">/</span>OF<span class="text-pink-500">/</span>CANDY</h1>
                    <h1 class="text-white text-7xl">MUSEUM<span class="text-pink-500">/</span>OF<span class="text-pink-500">/</span>CANDY</h1>
                    <h1 class="text-white text-7xl">MUSEUM<span class="text-pink-500">/</span>OF<span class="text-pink-500">/</span>CANDY</h1>
                </div>
                <img className="lg:w-1/2 sm:w-full mx-auto" src={images['hand2.png']} alt="Hand and a donut" />
            </div>
            <div className="flex lg:flex-row-reverse justify-around sm:flex-col">
                {/* <img className="w-1/2" src={images['milk.png']} alt="Milk" /> */}
                <div className="flex-1 self-center text-center sm:py-20">
                    <h2 className="text-pink-600 text-4xl">MUSEUM OF CANDY</h2>
                    <img className="flex self-center mx-auto" src={images['lolli_icon.png']} alt="Lollipop icon" />
                    <p className="text-pink-400 mx-32">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae beatae, maiores deserunt in voluptatibus aspernatur architecto excepturi delectus soluta?
                        Ipsa, deleniti dolorem hic consequatur repellat eveniet quidem voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam autem nam ex deserunt debitis eaque ratione!
                        Nobis, quidem assumenda.
                    </p>
                </div>
                <img className="lg:w-1/2 sm:w-full mx-auto" src={images['milk.png']} alt="Milk" />
            </div>
            <div className="flex lg:flex-row justify-around sm:flex-col">
                <div className="flex-1 self-center text-center sm:py-20">
                    <h2 className="text-pink-600 text-4xl">MUSEUM OF CANDY</h2>
                    <img className="flex self-center mx-auto" src={images['lolli_icon.png']} alt="Lollipop icon" />
                    <p className="text-pink-400 mx-32">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae beatae, maiores deserunt in voluptatibus aspernatur architecto excepturi delectus soluta?
                        Ipsa, deleniti dolorem hic consequatur repellat eveniet quidem voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam autem nam ex deserunt debitis eaque ratione!
                        Nobis, quidem assumenda.
                    </p>
                </div>
                <img className="lg:w-1/2 sm:w-full mx-auto" src={images['gumball.png']} alt="Gumball machine" />
            </div>
            <div className="flex lg:flex-row-reverse justify-around sm:flex-col">
                {/* <img className="w-1/2" src={images['sprinkles.png']} alt="Sprinkles" /> */}
                <div className="flex-1 self-center text-center sm:py-20">
                    <h2 className="text-pink-600 text-4xl">MUSEUM OF CANDY</h2>
                    <img className="flex self-center mx-auto" src={images['lolli_icon.png']} alt="Lollipop icon" />
                    <p className="text-pink-400 mx-32">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae beatae, maiores deserunt in voluptatibus aspernatur architecto excepturi delectus soluta?
                        Ipsa, deleniti dolorem hic consequatur repellat eveniet quidem voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam autem nam ex deserunt debitis eaque ratione!
                        Nobis, quidem assumenda.
                    </p>
                </div>
                <img className="lg:w-1/2 sm:w-full mx-auto" src={images['sprinkles.png']} alt="Sprinkles" />
            </div>
        </div>
    )
}

export default Index;