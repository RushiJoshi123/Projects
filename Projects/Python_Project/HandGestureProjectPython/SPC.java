import java.util.*;
class SPC {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Enter your age:");
        int age = sc.nextInt();
        
        System.out.println("Game rules:");
        System.out.println("Rock beats Scissors, Paper beats Rock, Scissors beats Paper.");
        System.out.println("Enter your choice (1 means Rock, 2 means Paper, 3 means Scissors):");

        int Mychoice = sc.nextInt();

        if (Mychoice < 1 || Mychoice > 3) 
		{
            System.out.println("Invalid choice , Please select 1, 2, or 3 AND try again.");
        }

        switch (Mychoice) {
            case 1:
                System.out.println("Your choice is Rock.");
                break;
            case 2:
                System.out.println("Your choice is Paper.");
                break;
            case 3:
                System.out.println("Your choice is Scissors.");
                break;
        }
		
        int computerchoice = ((int) ((Math.random()*10)%3)) + 1;

        System.out.println("Computer choice is: " + computerchoice);

        switch (computerchoice) {
            case 1:
                System.out.println("Computer choice is Rock.");
                break;
            case 2:
                System.out.println("Computer choice is Paper.");
                break;
            case 3:
                System.out.println("Computer choice is Scissors.");
                break;
        }

        if (Mychoice == computerchoice) {
            System.out.println("It is a tie.");
        } else if ((Mychoice == 1 && computerchoice == 3) || 
                   (Mychoice == 2 && computerchoice == 1) || 
                   (Mychoice == 3 && computerchoice == 2)) {
            System.out.println("Congrats, you won!");
        } else {
            System.out.println("Computer won, better luck next time!");
        }
    }
}
