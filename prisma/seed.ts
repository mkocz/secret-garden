import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'Rododendron Hotspur Red',
      price: 29,
      description:
        'The rhododendron is a beautiful evergreen shrub known for its lush foliage and spectacular clusters of vibrant spring flowers. It thrives in partial shade and prefers moist, well-draining acidic soil, making it ideal for woodland gardens and shaded borders. Its compact, rounded habit and year-round greenery add structure and elegance to any outdoor space. Easy to maintain and cold-resistant depending on the variety, the rhododendron is a perfect choice for gardeners looking for long-lasting color and decorative impact.',
      images: [
        'rhododendron/main.jpg',
        'rhododendron/sub1.jpg',
        'rhododendron/sub2.jpg',
      ],
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      name: 'Vanhoutte spirea',
      price: 24,
      description:
        'The Vanhoutte spirea (Spiraea × vanhouttei), commonly known as bridal wreath spirea, is a graceful deciduous shrub valued for its elegant arching branches and abundant spring blossoms. In late spring, it becomes covered with masses of small, white, fragrant flowers that create a cascading, snow-like effect. This hardy shrub thrives in full sun and well-drained soil, making it easy to grow in a wide range of garden conditions. It is known for its excellent cold tolerance and low maintenance needs, requiring only occasional pruning after flowering. The finely serrated green leaves turn shades of yellow or bronze in autumn, adding seasonal interest. Vanhoutte spirea works well as a specimen plant, in mixed borders, or as a flowering hedge. Its dense growth habit also provides good shelter for wildlife. The plant is resistant to most pests and diseases, contributing to its reliability in landscapes. With its elegant form and long-lasting appeal, this spirea remains a classic favorite in ornamental gardening.',
      images: ['spirea/main.jpg', 'spirea/sub1.jpg', 'spirea/sub2.jpg'],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'Hibiscus syriacus',
      price: 35,
      description:
        'Hibiscus syriacus, commonly known as Rose of Sharon, is a deciduous garden shrub admired for its large, colorful, trumpet-shaped flowers. Native to East Asia, it has become a popular ornamental plant in many regions due to its long-lasting summer blooms. The flowers appear in shades of white, pink, purple, and blue, often with contrasting centers that add visual interest. This hardy shrub thrives in full sun and well-drained soil, tolerating heat, drought, and urban conditions. It blooms from midsummer to early autumn, providing continuous color when many other shrubs have finished flowering. Rose of Sharon has an upright growth habit, making it suitable for hedges, borders, or as a standalone specimen. Its foliage is green and lush during the growing season, turning subtle shades in autumn before falling. The plant attracts pollinators like bees and butterflies, enhancing garden biodiversity. Regular pruning in late winter encourages healthy growth and abundant flowers. Overall, Hibiscus syriacus is a resilient, low-maintenance shrub that adds beauty and seasonal interest to any landscape.',
      images: ['hibiscus/main.jpg', 'hibiscus/sub1.jpg', 'hibiscus/sub2.jpg'],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      name: 'Lavender',
      price: 17,
      description:
        'Lavender, scientifically known as Lavandula, is a popular aromatic garden plant cherished for its fragrant purple flowers and silvery-green foliage. Native to the Mediterranean region, it thrives in full sun and well-drained, slightly alkaline soil, making it ideal for borders, rock gardens, and herb gardens. Lavender blooms from late spring to summer, producing spikes of small, densely packed flowers that attract bees, butterflies, and other pollinators. Its compact, bushy growth habit makes it suitable for hedges, edging, or container planting. The plant is drought-tolerant and low-maintenance, requiring minimal watering once established. Lavender leaves release a pleasant scent when touched, adding sensory appeal to gardens and outdoor spaces. Harvested flowers can be used for essential oils, sachets, or culinary purposes. Regular pruning after flowering helps maintain its shape and encourages vigorous growth. Lavender is also valued for its ability to repel certain garden pests naturally. Overall, Lavender (Lavandula) is a resilient, versatile, and fragrant shrub that enhances both the beauty and utility of ornamental landscapes.',
      images: ['lavender/main.jpg', 'lavender/sub1.jpg', 'lavender/sub2.jpg'],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17359',
      name: 'Mountain pine',
      price: 55,
      description:
        'Mountain pine, scientifically known as Pinus mugo, is a low-growing, evergreen shrub valued for its dense, dark green needles and rugged, compact form. Native to the mountains of central and southern Europe, it thrives in well-drained soil and full sun, making it ideal for rock gardens, slopes, and ornamental landscapes. Pinus mugo is highly hardy, tolerant of wind, cold, and poor soils, which makes it a reliable choice for challenging garden conditions. Its slow, bushy growth habit allows it to form natural mounds or groundcover, while some varieties can be trained into small trees or bonsai forms. The plant produces small cones that add seasonal interest and attract wildlife. Regular pruning is generally not required, though light trimming can maintain shape and encourage dense growth. Mountain pine is also resistant to most pests and diseases, contributing to its low-maintenance appeal. Its evergreen foliage provides year-round texture and color in the garden. Pinus mugo is often used in combination with other alpine or dwarf plants for naturalistic plantings. Overall, Mountain pine (Pinus mugo) is a resilient, versatile, and decorative evergreen that enhances both structure and greenery in outdoor spaces.',
      images: ['pinus/main.jpg', 'pinus/sub1.jpg', 'pinus/sub2.jpg'],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17459',
      name: 'Virginia creeper',
      price: 31,
      description:
        'Virginia creeper, scientifically known as Parthenocissus quinquefolia, is a vigorous deciduous climbing plant valued for its fast growth and striking foliage. It produces dense, five-lobed green leaves that turn brilliant shades of red and purple in autumn, adding dramatic seasonal color to gardens and walls. This hardy vine thrives in full sun to partial shade and adapts well to a wide range of soils, making it ideal for fences, trellises, and building facades. Virginia creeper can climb walls and structures using small adhesive tendrils, covering surfaces quickly while providing natural insulation and shade. In late summer, it produces small, greenish flowers followed by dark blue berries that attract birds and wildlife. The plant is low-maintenance, drought-tolerant once established, and resistant to most pests and diseases. Pruning can be done to control its growth and maintain shape, especially if it spreads aggressively. Virginia creeper also helps prevent soil erosion when planted on slopes or embankments. Its lush foliage provides year-round interest, particularly when combined with other climbers or shrubs. Overall, Virginia creeper (Parthenocissus quinquefolia) is a resilient, decorative, and versatile vine that enhances both vertical and horizontal garden spaces.',
      images: [
        'grapevine/main.jpg',
        'grapevine/sub1.jpg',
        'grapevine/sub2.jpg',
      ],
    },
  ];
}

function getOrders() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      address: 'Baker Street 21, London',
      totalPrice: 30,
      status: 'pending',
      items: [
        {
          productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
          quantity: 2,
          price: 5000,
          specialRequest: null,
        },
      ],
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  await Promise.all(
    getOrders().map(async (orderData) => {
      const createdOrder = await db.order.create({
        data: {
          firstName: orderData.firstName,
          lastName: orderData.lastName,
          email: orderData.email,
          address: orderData.address,
          totalPrice: orderData.totalPrice,
          status: orderData.status || 'pending',
        },
      });

      await Promise.all(
        orderData.items.map((item) =>
          db.orderItem.create({
            data: {
              orderId: createdOrder.id,
              productId: item.productId,
              quantity: item.quantity,
              price: item.price,
              specialRequest: item.specialRequest,
            },
          }),
        ),
      );

      return createdOrder;
    }),
  );
}

seed();
