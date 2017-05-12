import { heroes } from "./data/index"
export class InMemoryDataService {
    createDb() {
        return { heroes };
    }
}
