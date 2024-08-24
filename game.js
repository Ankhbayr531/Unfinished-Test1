alert("Choose what map you play");
var map = prompt("Farm/Valley/Armory");
alert("Choose what type of gun you take");
var gun = prompt("SMG/AR/SR");

if (map == "Farm" || map == "farm" && gun == "SMG" || gun == "Smg" || gun == "smg") {
    alert("Do you take which SMG?");
    var SMG = prompt("MAC-10/MP5/M3A1");

    if (SMG == "MAC-10" || SMG == "mac-10" || SMG == "Mac-10") {
        alert("Choose your teammate.");
        var team = prompt("Medic/Sniper/Rusher");
        if (team == "Medic" || team == "medic") {
            alert("Now you are leader of the team.");
            alert("Which way do you want to go?");
            var way = prompt("Left/Right/Straight");
            if (way == "Left" || way == "left") {
                alert("You came to the villa. You take down one guard and got an M3A1 and some valuable things.");
                alert("Do you stay here for a while?");
                var choice = prompt("yes/no");
                if (choice == "yes") {
                    alert("Another high-tier full squad is coming. Do you want to fight them or escape?");
                    var villa = prompt("fight/escape");
                    if (villa == "fight" || villa == "Fight" || villa == "FIGHT") {
                        alert("Your teammate died in the battle and you are seriously injured but can escape.");
                        var way1 = prompt("Straight/Right");
                        if (way1 == "Straight" || way1 == "straight") {
                            alert("You go straight and a Sniper shoots you.");
                            alert("YOU DIED!");
                        } else if (way1 == "Right" || way1 == "right") {
                            alert("You found one person.");
                            var choice1 = prompt("Kill/Run away");
                            if (choice1 == "Kill" || choice1 == "kill" || choice1 == "KILL") {
                                alert("YOU DIED!");
                            } else if (choice1 == "Run away" || choice1 == "run away" || choice1 == "RUN AWAY") {
                                alert("You find a house.");
                                var choice2 = prompt("Enter/Go further");
                                if (choice2 == "Enter" || choice2 == "enter" || choice2 == "ENTER") {
                                    alert("You found some medicine and healed yourself. You meet one Rusher.");
                                    alert("He offers to join your team.");
                                    var final = prompt("Accept/Refuse");
                                    if (final == "Accept" || final == "accept" || final == "ACCEPT") {
                                        alert("You fight with two people, but your new team member kills them. Then you escape.");
                                        alert("You win!");
                                    } else if (final == "Refuse" || final == "refuse" || final == "REFUSE") {
                                        alert("He shoots you.");
                                        alert("YOU DIED!");
                                    } else {
                                        alert("Try again.");
                                    }
                                } else if (choice2 == "Go further" || choice2 == "go further" || choice2 == "GO FURTHER") {
                                    alert("You meet one person who offers to join your team.");
                                    var final = prompt("Accept/Refuse");
                                    if (final == "Accept" || final == "accept" || final == "ACCEPT") {
                                        alert("You fight two people and die. But your new teammate escapes.");
                                        alert("YOU DIED!");
                                    } else if (final == "Refuse" || final == "refuse" || final == "REFUSE") {
                                        alert("He shoots you.");
                                        alert("YOU DIED!");
                                    } else {
                                        alert("Try again.");
                                    }
                                } else {
                                    alert("Try again.");
                                }
                            } else {
                                alert("Try again.");
                            }
                        } else {
                            alert("Try again.");
                        }
                    } else if (villa == "escape" || villa == "Escape" || villa == "ESCAPE") {
                        alert("Your team escapes successfully.");
                        var way2 = prompt("Which way do you want to go? Straight/Right");
                        if (way2 == "Straight" || way2 == "straight") {
                            alert("Your team goes straight and a Sniper shoots you both.");
                            alert("YOU DIED!");
                        } else if (way2 == "Right" || way2 == "right") {
                            alert("Your team found one person.");
                            var choice3 = prompt("Kill/Run away");
                            if (choice3 == "Kill" || choice3 == "kill" || choice3 == "KILL") {
                                alert("You killed him and got an AKM. Your team found a house.");
                                alert("You stay safe and win!");
                            } else if (choice3 == "Run away" || choice3 == "run away" || choice3 == "RUN AWAY") {
                                alert("You found a safe route and escaped.");
                                alert("You win!");
                            } else {
                                alert("Try again.");
                            }
                        } else {
                            alert("Try again.");
                        }
                    } else {
                        alert("Try again.");
                    }
                } else {
                    alert("Your team moves on.");
                }
            } else if (way == "Right" || way == "right") {
                alert("You come across a barn with a full squad inside. Do you want to raid them or sneak past?");
                var barn = prompt("raid/sneak");
                if (barn == "raid" || barn == "Raid") {
                    alert("Your team engages and you successfully take them down, but you lose your Medic.");
                    alert("You win, but with heavy losses.");
                } else if (barn == "sneak" || barn == "Sneak") {
                    alert("You successfully sneak past and find a safe house.");
                    alert("You win!");
                }
            } else if (way == "Straight" || way == "straight") {
                alert("You walk into an open field. A sniper shoots you.");
                alert("YOU DIED!");
            } else {
                alert("Try again.");
            }
        } else if (team == "Sniper" || team == "sniper") {
            alert("You and your sniper teammate move silently.");
            alert("You encounter an enemy squad. Do you want to ambush them or avoid them?");
            var ambush = prompt("ambush/avoid");
            if (ambush == "ambush" || ambush == "Ambush") {
                alert("You successfully ambush them and win the battle.");
                alert("You win!");
            } else if (ambush == "avoid" || ambush == "Avoid") {
                alert("You avoid the enemy but get caught in a crossfire.");
                alert("YOU DIED!");
            } else {
                alert("Try again.");
            }
        } else if (team == "Rusher" || team == "rusher") {
            alert("You and your Rusher teammate charge forward.");
            alert("You come across an enemy hideout. Do you raid or retreat?");
            var raid = prompt("raid/retreat");
            if (raid == "raid" || raid == "Raid") {
                alert("You raid the hideout and win a close battle.");
                alert("You win!");
            } else if (raid == "retreat" || raid == "Retreat") {
                alert("You retreat safely but miss out on the loot.");
                alert("You survived!");
            } else {
                alert("Try again.");
            }
        }
    } else if (SMG == "MP5" || SMG == "mp5" || SMG == "Mp5") {
        alert("Choose your teammate.");
        var team = prompt("Medic/Sniper/Rusher");
        if (team == "Medic" || team == "medic") {
            alert("You and your Medic move cautiously.");
            alert("You find a hidden stash of supplies.");
            alert("");
        }
    } else if (SMG == "M3A1" || SMG == "m3a1" || SMG == "M3a1") {
        alert("Choose your teammate.");
        var team = prompt("Medic/Sniper/Rusher");
        alert("You and your teammate move forward to the next objective.");
        alert("");
    }
} else if (map == "Farm" || map == "farm" && gun == "AR" || gun == "Ar" || gun == "ar") {
    alert("Do you take which AR?");
    var AR = prompt("AKM/M4A1/AUG");

    if (AR == "AKM" || AR == "akm" || AR == "Akm") {
        alert("Choose your teammate.");
        var team = prompt("Medic/Sniper/Rusher");

        if (team == "Medic" || team == "medic") {
            alert("You and your medic teammate push forward.");
            var action = prompt("Do you want to raid a warehouse or scout the perimeter? (raid/scout)");
            if (action == "raid" || action == "Raid") {
                alert("You raided the warehouse and found supplies, but alerted a nearby squad.");
                var choice = prompt("Do you want to fight or escape? (fight/escape)");
                if (choice == "fight" || choice == "Fight") {
                    alert("You fought off the squad but lost your medic. You barely survive.");
                    alert("YOU WIN... but at a great cost.");
                } else if (choice == "escape" || choice == "Escape") {
                    alert("You escaped but your medic got left behind. YOU SURVIVED!");
                }
            } else if (action == "scout" || action == "Scout") {
                alert("You scouted the area and found no threats. You survive and win!");
            } else {
                alert("Try again.");
            }
        }
    } else if (AR == "M4A1" || AR == "m4a1" || AR == "M4A1") {
        alert("You and your team push through the forest.");
        alert("You successfully eliminate the enemies.");
        alert("");
    } else if (AR == "AUG" || AR == "aug" || AR == "Aug") {
        alert("You take down the enemies and secure the area.");
        alert("");
    }
} else if (map == "Farm" || map == "farm" && gun == "SR" || gun == "Sr" || gun == "sr") {
    alert("Do you take which SR?");
    var SR = prompt("M24/AX50/Mosin");

    if (SR == "M24" || SR == "m24" || SR == "M24") {
        alert("Choose your teammate.");
        var team = prompt("Medic/Sniper/Rusher");
        if (team == "Medic" || team == "medic") {
            alert("You and your medic set up in a hidden position.");
            var action = prompt("Do you want to fortify or engage? (fortify/engage)");
            if (action == "fortify" || action == "Fortify") {
                alert("You fortified your position and successfully held off waves of enemies.");
                alert("You win!");
            } else if (action == "engage" || action == "Engage") {
                alert("You engaged too early and got surrounded.");
                alert("YOU DIED!");
            }
        }
    } else if (SR == "AX50" || SR == "ax50" || SR == "Ax50") {
        alert("You snipe enemies from a distance and escape safely.");
        alert("You win!");
    } else if (SR == "Mosin" || SR == "mosin" || SR == "Mosin") {
        alert("You eliminate all enemies with precise shots.");
        alert("Victory is yours!");
    }
}else if (map == "Valley" || map == "valley" && gun == "SMG" || gun == "Smg" || gun == "smg") {
    alert("Do you take which SMG?");
    var SMG = prompt("MAC-10/MP5/M3A1");

    if (SMG == "MAC-10" || SMG == "mac-10" || SMG == "Mac-10") {
        alert("Choose your teammate.");
        var team = prompt("Medic/Sniper/Rusher");

        if (team == "Medic" || team == "medic") {
            alert("Now you are leader of the team.");
            alert("Which way do you want to go?");
            var way = prompt("Left/Right/Straight");

            if (way == "Left" || way == "left") {
                alert("You encounter an enemy outpost hidden in the valley. Do you want to attack it or avoid it?");
                var outpost = prompt("attack/avoid");

                if (outpost == "attack" || outpost == "Attack") {
                    alert("You launch a surprise attack on the outpost. Your medic is injured, but you manage to take the outpost.");
                    alert("You win!");
                } else if (outpost == "avoid" || outpost == "Avoid") {
                    alert("You avoid the outpost, but a patrol spots you. You're forced into a firefight.");
                    alert("Despite fighting hard, you're overwhelmed.");
                    alert("YOU DIED!");
                }
            } else if (way == "Right" || way == "right") {
                alert("You follow a narrow path and discover a cave. Do you want to explore the cave or continue?");
                var cave = prompt("explore/continue");

                if (cave == "explore" || cave == "Explore") {
                    alert("You explore the cave and find a hidden weapons cache. You upgrade your gear and are ready for the final battle.");
                    alert("You win!");
                } else if (cave == "continue" || cave == "Continue") {
                    alert("You continue onward, but without exploring the cave, you miss the valuable equipment inside.");
                    alert("You reach the end of the valley but encounter a well-armed enemy force.");
                    alert("YOU DIED!");
                }
            } else if (way == "Straight" || way == "straight") {
                alert("You walk into an open area in the valley and are ambushed by enemies from all sides.");
                alert("YOU DIED!");
            }
        } else if (team == "Sniper" || team == "sniper") {
            alert("You and your sniper teammate set up in a high position in the valley.");
            alert("You spot an enemy convoy moving below. Do you want to engage them from a distance or let them pass?");
            var convoy = prompt("engage/pass");

            if (convoy == "engage" || convoy == "Engage") {
                alert("You and your sniper teammate take out the convoy from afar. The enemies are taken by surprise and are easily defeated.");
                alert("You win!");
            } else if (convoy == "pass" || convoy == "Pass") {
                alert("You let the convoy pass, but they alert a nearby squad.");
                alert("You're ambushed and outnumbered.");
                alert("YOU DIED!");
            }
        } else if (team == "Rusher" || team == "rusher") {
            alert("You and your Rusher teammate charge through the valley.");
            alert("You encounter a fortified enemy position. Do you storm it or try to flank?");
            var fortify = prompt("storm/flank");

            if (fortify == "storm" || fortify == "Storm") {
                alert("You storm the enemy position with overwhelming force. After a tough fight, you manage to take it over.");
                alert("You win!");
            } else if (fortify == "flank" || fortify == "Flank") {
                alert("You attempt to flank the position, but your team is caught in crossfire.");
                alert("YOU DIED!");
            }
        }
    } else if (SMG == "MP5" || SMG == "mp5" || SMG == "Mp5") {
        alert("Choose your teammate.");
        var team = prompt("Medic/Sniper/Rusher");

        if (team == "Medic" || team == "medic") {
            alert("You and your medic push through the valley. You find an abandoned village and decide to take shelter.");
            alert("You are ambushed by an enemy squad, but manage to fend them off with your medic's help.");
            alert("You win!");
        } else if (team == "Sniper" || team == "sniper") {
            alert("You and your sniper teammate hold your ground and pick off enemies from a distance.");
            alert("You successfully eliminate all threats and win!");
        } else if (team == "Rusher" || team == "rusher") {
            alert("You and your rusher teammate charge forward, clearing the valley with brute force.");
            alert("You win after a fierce battle!");
        }
    } else if (SMG == "M3A1" || SMG == "m3a1" || SMG == "M3a1") {
        alert("Choose your teammate.");
        var team = prompt("Medic/Sniper/Rusher");

        if (team == "Medic" || team == "medic") {
            alert("You and your medic find a small encampment in the valley.");
            var action = prompt("Do you want to raid it or rest? (raid/rest)");

            if (action == "raid" || action == "Raid") {
                alert("You successfully raid the encampment, gaining valuable resources and winning the battle!");
                alert("You win!");
            } else if (action == "rest" || action == "Rest") {
                alert("You decide to rest, but an enemy patrol finds you while you're vulnerable.");
                alert("YOU DIED!");
            }
        } else if (team == "Sniper" || team == "sniper") {
            alert("You and your sniper teammate spot an enemy camp from a high vantage point.");
            alert("You eliminate the enemies from afar and win!");
        } else if (team == "Rusher" || team == "rusher") {
            alert("You and your rusher teammate engage in an intense battle in the valley.");
            alert("After a fierce fight, you emerge victorious!");
        }
    }
} else if (map == "Valley" || map == "valley" && gun == "AR" || gun == "Ar" || gun == "ar") {
    alert("Do you take which AR?");
    var AR = prompt("AKM/M4A1/AUG");

    if (AR == "AKM" || AR == "akm" || AR == "Akm") {
        alert("Choose your teammate.");
        var team = prompt("Medic/Sniper/Rusher");

        if (team == "Medic" || team == "medic") {
            alert("You and your medic take a defensive position in the valley.");
            alert("You successfully fend off enemy waves and win!");
        } else if (team == "Sniper" || team == "sniper") {
            alert("You and your sniper teammate pick off enemies from a distance.");
            alert("You win the fight with ease!");
        } else if (team == "Rusher" || team == "rusher") {
            alert("You charge forward with your rusher teammate, clearing the valley with overwhelming force.");
            alert("You win!");
        }
    } else if (AR == "M4A1" || AR == "m4a1" || AR == "M4a1") {
        alert("You and your team engage in a series of skirmishes throughout the valley.");
        alert("After a tough battle, you emerge victorious!");
    } else if (AR == "AUG" || AR == "aug" || AR == "Aug") {
        alert("Your team fights through the valley and secures the area after a hard-fought battle.");
        alert("You win!");
    }
} else if (map == "Valley" || map == "valley" && gun == "SR" || gun == "Sr" || gun == "sr") {
    alert("Do you take which SR?");
    var SR = prompt("M24/AX50/Mosin");

    if (SR == "M24" || SR == "m24" || SR == "M24") {
        alert("Choose your teammate.");
        var team = prompt("Medic/Sniper/Rusher");

        if (team == "Medic" || team == "medic") {
            alert("You and your medic set up a sniper nest in the valley.");
            alert("You pick off enemies one by one and win the battle!");
            alert("You win!");
        } else if (team == "Sniper" || team == "sniper") {
            alert("You and your sniper teammate work together to eliminate enemies from long range.");
            alert("You win the battle!");
        } else if (team == "Rusher" || team == "rusher") {
            alert("Your rusher teammate distracts the enemies while you pick them off.");
            alert("You win the fight!");
        }
    } else if (SR == "AX50" || SR == "ax50" || SR == "Ax50") {
        alert("You pick off enemies from long range with the AX50.");
        alert("After a long battle, you win!");
    } else if (SR == "Mosin" || SR == "mosin" || SR == "Mosin") {
        alert("You use the Mosin to take down enemies with precision.");
        alert("You win the battle with ease!");
    }
} else if (map == "Armory" || map == "armory" && gun == "SMG" || gun == "Smg" || gun == "smg") {
    alert("Do you take which SMG?");
    var SMG = prompt("MAC-10/MP5/M3A1");

    if (SMG == "MAC-10" || SMG == "mac-10" || SMG == "Mac-10") {
        alert("Choose your teammate.");
        var team = prompt("Medic/Sniper/Rusher");

        if (team == "Medic" || team == "medic") {
            alert("You and your medic are preparing to infiltrate the heavily guarded Armory.");
            alert("Which way do you want to go?");
            var way = prompt("Left/Right/Straight");

            if (way == "Left" || way == "left") {
                alert("You find a side entrance guarded by a few enemies.");
                var action = prompt("Do you want to ambush them or sneak past? (ambush/sneak)");

                if (action == "ambush" || action == "Ambush") {
                    alert("You ambush the guards and take control of the entrance. Inside, you find powerful weapons.");
                    alert("You win!");
                } else if (action == "sneak" || action == "Sneak") {
                    alert("You sneak past the guards successfully and enter the armory. However, reinforcements arrive.");
                    alert("You manage to fight them off but barely survive.");
                    alert("You win!");
                }
            } else if (way == "Right" || way == "right") {
                alert("You encounter a fortified door. Do you want to blow it open or find another way around?");
                var decision = prompt("blow/find");

                if (decision == "blow" || decision == "Blow") {
                    alert("You blow open the door and storm the armory. You take heavy fire but manage to win.");
                    alert("You win!");
                } else if (decision == "find" || decision == "Find") {
                    alert("You find a hidden passage leading directly to the main room of the armory.");
                    alert("You catch the enemy off guard and secure the weapons.");
                    alert("You win!");
                }
            } else if (way == "Straight" || way == "straight") {
                alert("You go straight into an ambush.");
                alert("YOU DIED!");
            }
        } else if (team == "Sniper" || team == "sniper") {
            alert("You and your sniper teammate set up at a vantage point overlooking the armory.");
            alert("Do you want to eliminate the guards from a distance or move in closer?");
            var sniperAction = prompt("distance/closer");

            if (sniperAction == "distance" || sniperAction == "Distance") {
                alert("You pick off the guards from a distance, clearing the way for your approach.");
                alert("You win!");
            } else if (sniperAction == "closer" || sniperAction == "Closer") {
                alert("You move in closer and engage the enemy at short range. It's a tough fight, but you win.");
                alert("You win!");
            }
        } else if (team == "Rusher" || team == "rusher") {
            alert("You and your rusher teammate storm the armory with overwhelming force.");
            alert("You encounter heavy resistance, but you manage to take control of the armory.");
            alert("You win!");
        }
    } else if (SMG == "MP5" || SMG == "mp5" || SMG == "Mp5") {
        alert("Choose your teammate.");
        var team = prompt("Medic/Sniper/Rusher");

        if (team == "Medic" || team == "medic") {
            alert("You and your medic teammate infiltrate the armory through the ventilation system.");
            alert("You drop into the main room undetected and secure the area without alerting the enemy.");
            alert("You win!");
        } else if (team == "Sniper" || team == "sniper") {
            alert("You and your sniper teammate take out enemies from long range before moving in to secure the armory.");
            alert("You win!");
        } else if (team == "Rusher" || team == "rusher") {
            alert("You and your rusher teammate break through the front entrance with guns blazing.");
            alert("After an intense firefight, you secure the armory.");
            alert("You win!");
        }
    } else if (SMG == "M3A1" || SMG == "m3a1" || SMG == "M3a1") {
        alert("Choose your teammate.");
        var team = prompt("Medic/Sniper/Rusher");

        if (team == "Medic" || team == "medic") {
            alert("You and your medic make your way to the armory through an underground tunnel.");
            alert("You surprise the enemy and take control of the armory.");
            alert("You win!");
        } else if (team == "Sniper" || team == "sniper") {
            alert("You and your sniper set up outside the armory and pick off enemies as they try to reinforce the location.");
            alert("You win!");
        } else if (team == "Rusher" || team == "rusher") {
            alert("You and your rusher teammate break through the defenses with sheer speed and force.");
            alert("After a hard-fought battle, you win!");
        }
    }
} else if (map == "Armory" || map == "armory" && gun == "AR" || gun == "Ar" || gun == "ar") {
    alert("Do you take which AR?");
    var AR = prompt("AKM/M4A1/AUG");

    if (AR == "AKM" || AR == "akm" || AR == "Akm") {
        alert("Choose your teammate.");
        var team = prompt("Medic/Sniper/Rusher");

        if (team == "Medic" || team == "medic") {
            alert("You and your medic breach the armory through the main entrance.");
            alert("It's a brutal fight, but you secure the armory.");
            alert("You win!");
        } else if (team == "Sniper" || team == "sniper") {
            alert("You and your sniper take out enemies from long range, allowing you to clear the armory.");
            alert("You win!");
        } else if (team == "Rusher" || team == "rusher") {
            alert("You and your rusher teammate storm the armory with overwhelming firepower.");
            alert("After a tough battle, you secure the area.");
            alert("You win!");
        }
    } else if (AR == "M4A1" || AR == "m4a1" || AR == "M4a1") {
        alert("You and your team infiltrate the armory with stealth, taking out enemies quietly.");
        alert("You secure the armory without raising an alarm.");
        alert("You win!");
    } else if (AR == "AUG" || AR == "aug" || AR == "Aug") {
        alert("You and your team engage in a fierce battle to take control of the armory.");
        alert("After a long fight, you emerge victorious!");
        alert("You win!");
    }
} else if (map == "Armory" || map == "armory" && gun == "SR" || gun == "Sr" || gun == "sr") {
    alert("Do you take which SR?");
    var SR = prompt("M24/AX50/Mosin");

    if (SR == "M24" || SR == "m24" || SR == "M24") {
        alert("Choose your teammate.");
        var team = prompt("Medic/Sniper/Rusher");

        if (team == "Medic" || team == "medic") {
            alert("You and your medic set up a sniper position overlooking the armory.");
            alert("You pick off enemies one by one until the area is clear.");
            alert("You win!");
        } else if (team == "Sniper" || team == "sniper") {
            alert("You and your sniper teammate coordinate your shots, eliminating all enemies.");
            alert("You win!");
        } else if (team == "Rusher" || team == "rusher") {
            alert("You use your sniper rifle to provide cover for your rusher teammate as they take the armory.");
            alert("You win!");
        }
    } else if (SR == "AX50" || SR == "ax50" || SR == "Ax50") {
        alert("You eliminate enemies from long range with precision.");
        alert("After a long battle, you secure the armory.");
        alert("You win!");
    } else if (SR == "Mosin" || SR == "mosin" || SR == "Mosin") {
        alert("Using the Mosin, you carefully take out key targets and secure the armory.");
        alert("You win!");
    }
}