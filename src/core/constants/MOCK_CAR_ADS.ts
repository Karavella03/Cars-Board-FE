import { ICarAd } from "../interfaces/ICarAd";

export const MOCK_CAR_ADS: ICarAd[] = [
    {
        id: '1',
        brand: 'Лада',
        model: 'Калина',
        color: 'Чёрный',
        numberOfOwners: '3',
        price: '175000',
        productionDate: '2011',
        description:
          'Продаю автомобиль Лада Калина чёрного цвета 21 века, не ломается, в отличном состоянии, документы чистые, музыка: 2 колонки, передние стеклоподъёмнкии и всё такое/ Lorem ipsum dolor sit amet. Et cumque quae ut sapiente accusamus et nihil soluta. Qui dolorem et corporis sunt aut recusandae voluptates est illo deleniti est laborum placeat. Non dignissimos perspiciatis et repudiandae incidunt sed quis similique vel voluptas laudantium. Et dolores atque hic Quis alias et laborum omnis in rerum officia est voluptate molestias vel vitae impedit eos architecto magnam.',
        user: {
          name: 'Никита',
          phone: '8 (952) 505-68-84',
          id: '11',
          email: 'Nikitke06060@gmail.com',
          surname: 'fff',
        },
        imageSrc: "https://sun9-34.userapi.com/impg/hriQNpSoO-_PqlDVTDlyF6MjtOFr8Y9nwMji1A/CKppQsX9Euo.jpg?size=1600x1200&quality=96&sign=e3a9e313bf1d5aebd7f1c97a4571a09c&type=album"
      },
      {
        id: '2',
        brand: 'Лада',
        model: 'Приора',
        color: 'Чёрный',
        numberOfOwners: '17',
        price: '150000',
        productionDate: '2009',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec varius purus, et sagittis nibh. Mauris eget odio justo. Suspendisse potenti. Suspendisse et luctus purus. Nunc vel venenatis turpis. Praesent eget elit pretium, vestibulum risus ornare, posuere mi. Curabitur nisi tellus, vehicula tincidunt vehicula eu, mattis at tortor. Nam a purus eu felis lobortis finibus et in neque. Sed eu iaculis odio. Vivamus ultricies ac velit quis scelerisque. Sed laoreet consectetur justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce eu ipsum id quam congue pretium. Quisque quis lacus velit. Maecenas dictum enim vitae elit volutpat elementum. Nullam accumsan porta cursus. Nam ac neque purus. Nam tincidunt pellentesque mattis. Suspendisse a imperdiet nulla, et bibendum justo. Praesent tempor diam sed dui laoreet, ac faucibus risus porttitor. Etiam rhoncus cursus eros, sed suscipit tortor volutpat non. Praesent consequat magna magna. Pellentesque nec rutrum felis, sed tempus orci. Cras.',
        user: {
          name: 'Jack',
          phone: '8 (952) 505-68-84',
          id: '22',
          email: 'Nikitke06060@gmail.com',
          surname: 'fff',
        },
        imageSrc: "https://лада.онлайн/scripts/timthumb.php?src=https://xn--80aal0a.xn--80asehdb/uploads/posts/2014-12/1418980535_logo.jpg&w=640&h=380&zc=1"
      }
      ,{
        id: '3',
        brand: 'Mazda',
        model: 'RX-7',
        color: 'Зелёный',
        numberOfOwners: '1',
        price: '2500000',
        productionDate: '1995',
        description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec varius purus, et sagittis nibh. Mauris eget odio justo. Suspendisse potenti. Suspendisse et luctus purus. Nunc vel venenatis turpis. Praesent eget elit pretium, vestibulum risus ornare, posuere mi. Curabitur nisi tellus, vehicula tincidunt vehicula eu, mattis at tortor. Nam a purus eu felis lobortis finibus et in neque. Sed eu iaculis odio. Vivamus ultricies ac velit quis scelerisque. Sed laoreet consectetur justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce eu ipsum id quam congue pretium. Quisque quis lacus velit. Maecenas dictum enim vitae elit volutpat elementum. Nullam accumsan porta cursus. Nam ac neque purus. Nam tincidunt pellentesque mattis. Suspendisse a imperdiet nulla, et bibendum justo. Praesent tempor diam sed dui laoreet, ac faucibus risus porttitor. Etiam rhoncus cursus eros, sed suscipit tortor volutpat non. Praesent consequat magna magna. Pellentesque nec rutrum felis, sed tempus orci. Cras.',
      user: {
          name: 'Kenji',
          phone: '8 (952) 505-68-84',
          id: '33',
          email: 'Nikitke06060@gmail.com',
          surname: 'fff',
        },
        imageSrc: "https://images.cdn.circlesix.co/image/1/640/0/uploads/posts/2018/07/2f94fbd0f1bbda3f8e2db4a2d5418252.jpg"
      }
      ,{
        id: '4',
        brand: 'Daewo',
        model: 'Matiz',
        color: 'Белый',
        numberOfOwners: '2',
        price: '200000',
        productionDate: '2008',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec varius purus, et sagittis nibh. Mauris eget odio justo. Suspendisse potenti. Suspendisse et luctus purus. Nunc vel venenatis turpis. Praesent eget elit pretium, vestibulum risus ornare, posuere mi. Curabitur nisi tellus, vehicula tincidunt vehicula eu, mattis at tortor. Nam a purus eu felis lobortis finibus et in neque. Sed eu iaculis odio. Vivamus ultricies ac velit quis scelerisque. Sed laoreet consectetur justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce eu ipsum id quam congue pretium. Quisque quis lacus velit. Maecenas dictum enim vitae elit volutpat elementum. Nullam accumsan porta cursus. Nam ac neque purus. Nam tincidunt pellentesque mattis. Suspendisse a imperdiet nulla, et bibendum justo. Praesent tempor diam sed dui laoreet, ac faucibus risus porttitor. Etiam rhoncus cursus eros, sed suscipit tortor volutpat non. Praesent consequat magna magna. Pellentesque nec rutrum felis, sed tempus orci. Cras.',
        user: {
          name: 'Wolf',
          phone: '8 (952) 505-68-84',
          id: '44',
          email: 'Nikitke06060@gmail.com',
          surname: 'fff',
        },
        imageSrc: "https://img2.newsmir.info/img/p/2/1734/1733020.jpg"
      }
]