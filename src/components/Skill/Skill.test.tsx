import { cleanup, fireEvent, render } from "@testing-library/react";
import Skill from "./Skill";
import { Attribute } from "../../types/Attribute";

afterEach(() => {
    cleanup();
})

describe("Skill Component", () => {
    const mockBase: Attribute = {
        name: "Strength",
        value: 10,
        change: jest.fn()
    }

    const mockName = "Athletics";
    const mockRank = 2;
    const { container } = render(<Skill baseAttribute={mockBase} name={mockName} rank={mockRank} />);

    test("should render the skill component", () => {
        expect(container.getElementsByClassName('skill')).toBeTruthy();
    })

    test("should render the skill name", () => {
        expect(container.getElementsByClassName('skill-name')).toBeTruthy();
    })

    test("should render the skill rank", () => {
        expect(container.getElementsByClassName('skill-rank')).toBeTruthy();
    })

    test("Should render the skill max rank", () => {
        expect(container.getElementsByClassName('skill-max-rank')).toBeTruthy();
    })

    test("Should render the skill base attribute", () => {
        expect(container.getElementsByClassName('skill-base-attribute')).toBeTruthy();
    })

    test("Should render the skill button", () => {
        expect(container.getElementsByClassName('skill-button')).toBeTruthy();
    })

    test("Should call the change function onClick of skill button", () => {
        const skillButton = container.getElementsByClassName(".skill-button")[0];
        if (skillButton) {
            fireEvent.click(skillButton);
            expect(mockBase.change).toHaveBeenCalled();
        }
    })
})