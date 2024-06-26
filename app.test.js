const request = require("supertest");
const app = require("./app");

describe("TODO API", () => {
    it("should retrieve all tasks", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Code");
        expect(res.text).toContain("Sleep");
        expect(res.text).toContain("Coffee");
    });

    it("should add a new task", async () => {
        const newTask = { todoTask: "Test Task" };
        const res = await request(app).post("/").send(newTask);

        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Test Task");
    });

    it("should delete a task", async () => {
        

        const resGet = await request(app).get("/");
        const match = resGet.text.match("Code");
        // console.log(match[0])
        if(match){
            const todoIdToDelete=match[0]
            const resDelete = await request(app).post("/delete").send({ todoId: todoIdToDelete });
            expect(resDelete.statusCode).toBe(302); // Expecting redirect
      
            const resGetAfterDelete = await request(app).get("/");
            expect(resGetAfterDelete.text).not.toContain("Task to be deleted");
          
        }else{
            throw new Error("Failed to find task ID to be deleted")
        }

    });
});
