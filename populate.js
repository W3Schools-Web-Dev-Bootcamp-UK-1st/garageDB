async function populateDB(sequelize) {
    // Access models through the sequelize instance
    const Owner = sequelize.models.owner;
    const Car = sequelize.models.car;
    const Part = sequelize.models.part;
    const Repair = sequelize.models.repair;
    const Service = sequelize.models.service;


    const owner1 = await Owner.create({ name: 'John Doe', business: 'Real Estate', worth: 500000, registered_at: new Date() });
    const owner2 = await Owner.create({ name: 'Jane Doe', business: 'IT', worth: 600000, registered_at: new Date() });

    const car1 = await Car.create({ name: 'Car1', vin: '1HGCM82633A123456', brand: 'Brand1', description: 'Description1', registered_at: new Date(), isrunning: true, underconstruction: false, manufactured: 2010, mileage: 50000 });
    const car2 = await Car.create({ name: 'Car2', vin: '1HGCM82633A654321', brand: 'Brand2', description: 'Description2', registered_at: new Date(), isrunning: true, underconstruction: false, manufactured: 2015, mileage: 30000 });

    const part1 = await Part.create({ part_name: 'Part1', part_number: 111, compatible_cars_id: 1, part_description: 'Description1' });
    const part2 = await Part.create({ part_name: 'Part2', part_number: 222, compatible_cars_id: 1, part_description: 'Description2' });

    const repair1 = await Repair.create({ repair_date: new Date(), description: 'Repair Description1' });
    const repair2 = await Repair.create({ repair_date: new Date(), description: 'Repair Description2' });

    const service1 = await Service.create({ service_id: repair1.id, car_id: car1.id });
    const service2 = await Service.create({ service_id: repair2.id, car_id: car2.id });

    await owner1.addCar(car1);
    await owner2.addCar(car2);

    await car1.addPart(part1);
    await car1.addPart(part2);
}

module.exports = populateDB;
