import { render, screen, fireEvent, act } from "@testing-library/react";
import ProductsManagement from "./products-management";
import { productsApi } from "../services/apis";

jest.mock("../services/apis", () => ({
    productsApi: {
        update: jest.fn(),
    },
}));

describe("ProductsManagement", () => {
    let container:any;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
    });

    it("renders the form elements correctly", () => {
        render(<ProductsManagement />);

        expect(screen.getByTestId("product-id")).toBeInTheDocument();
        expect(screen.getByTestId("action-type")).toBeInTheDocument();
        expect(screen.getByTestId("quantity")).toBeInTheDocument();
        expect(screen.getByTestId("cadastrar")).toBeInTheDocument();
    });

    it("updates state when inputs change", () => {
        render(<ProductsManagement />);

        const codeInput = screen.getByTestId("product-id");
        const quantityInput = screen.getByTestId("quantity");
        const typeSelect = screen.getByTestId("action-type");

        fireEvent.change(codeInput, { target: { value: "123" } });
        fireEvent.change(quantityInput, { target: { value: "10" } });
        fireEvent.change(typeSelect, { target: { value: "Venda" } });

        expect((codeInput as HTMLInputElement).value).toBe("123");
        expect((quantityInput as HTMLInputElement).value).toBe("10");
        expect((typeSelect as HTMLSelectElement).value).toBe("Venda");
    });

    it("calls the API and shows confirmation on successful update", async () => {
        (productsApi.update as jest.Mock).mockResolvedValueOnce({});
        
        await act(async () => {
            render(<ProductsManagement />, container);
        })

        const codeInput = screen.getByTestId("product-id");
        const quantityInput = screen.getByTestId("quantity");
        const typeSelect = screen.getByTestId("action-type");
        const submitButton = screen.getByTestId("cadastrar");
        const nameInput = screen.getByTestId("name");
        

        fireEvent.change(codeInput, { target: { value: "123" } });
        fireEvent.change(quantityInput, { target: { value: "10" } });
        fireEvent.change(typeSelect, { target: { value: "Compra" } });
        fireEvent.change(nameInput, { target: { value: "Test" } });
        await act(async () => {
            fireEvent.click(submitButton);
        })

        const successAlert = await screen.findByText("Cadastrado com sucesso");
        expect(successAlert).toBeInTheDocument();
    });
});