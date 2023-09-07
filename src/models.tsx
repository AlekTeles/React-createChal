export interface ITask {
    id:     number;
    isDone: boolean;
    name:   string;
}

export const taskListData: ITask[] = [
    {
        id: 1,
        isDone: false,
        name: "danone",
    },
    {
        id: 2,
        isDone: true,
        name: "danone",
    }
]